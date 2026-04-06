import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const inputFile = '/Users/lukehowsam/lhowsam.com/src/config/jobs.ts';
const contentDir = path.resolve(process.cwd(), 'src/content/experience');

function slugifySegment(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function escapeFrontmatterString(value) {
  return JSON.stringify(value ?? '');
}

function parseDate(value) {
  const [day, month, year] = value.split('/');
  return new Date(Number(year), Number(month) - 1, Number(day));
}

function toIsoDate(value) {
  const [day, month, year] = value.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

export function parseCompaniesSource(source) {
  const match = source.match(/const companies(?::\s*[^=]+)?\s*=\s*(\[[\s\S]*\]);\s*export default companies;/);

  if (!match) {
    throw new Error('Unable to locate companies array in jobs.ts');
  }

  return Function(`"use strict"; return (${match[1]});`)();
}

export function normalizeCompanies(companies) {
  const skyBet = companies.find((company) => company.title === 'Sky Betting & Gaming');
  const flutter = companies.find((company) => company.title === 'Flutter UKI');

  return companies
    .filter((company) => company.title !== 'Sky Betting & Gaming')
    .map((company) => {
      if (company.title !== 'Flutter UKI' || !flutter) {
        return company;
      }

      const mergedJobs = [
        ...(skyBet?.jobs ?? []).map((job) => ({
          ...job,
          title: 'Sky Betting & Gaming',
          roleTitle: job.title,
          sortOrder: 1,
        })),
        ...flutter.jobs.map((job) => ({
          ...job,
          title: 'Sporting Life',
          roleTitle: job.title,
          sortOrder: 2,
        })),
      ];

      return {
        ...company,
        slug: slugifySegment(company.title),
        jobs: mergedJobs,
      };
    });
}

export function sortJobsByStartDateDesc(jobs) {
  if (jobs.some((job) => Number.isFinite(job.sortOrder))) {
    return [...jobs].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  }

  return [...jobs].sort(
    (a, b) => parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime(),
  );
}

function formatJobDates(job) {
  return `${job.startDate} - ${job.endDate ?? 'Present'}`;
}

export function buildCompanyMdxDocument(company) {
  const sortedJobs = sortJobsByStartDateDesc(company.jobs);
  const oldestJob = sortedJobs.reduce((earliest, job) => {
    return parseDate(job.startDate) < parseDate(earliest.startDate) ? job : earliest;
  }, sortedJobs[0]);
  const latestJob = sortedJobs.reduce((latest, job) => {
    const latestDate = latest.endDate ? parseDate(latest.endDate) : new Date(8640000000000000);
    const jobDate = job.endDate ? parseDate(job.endDate) : new Date(8640000000000000);
    return jobDate > latestDate ? job : latest;
  }, sortedJobs[0]);
  const isPresent = sortedJobs.some((job) => !job.endDate);

  const frontmatter = [
    '---',
    `title: ${escapeFrontmatterString(company.title)}`,
    `slug: ${escapeFrontmatterString(company.slug)}`,
    `from: ${toIsoDate(oldestJob.startDate)}`,
    `to: ${isPresent ? 'null' : toIsoDate(latestJob.endDate)}`,
    `isPresent: ${isPresent}`,
    `jobCount: ${sortedJobs.length}`,
    '---',
    '',
  ].join('\n');

  const sections = sortedJobs
    .map((job) => {
      const lines = [
        `## ${job.title}`,
        '',
        ...(job.roleTitle ? [`**Role:** ${job.roleTitle}`, ''] : []),
        `**Location:** ${job.location}`,
        '',
        `**Dates:** ${formatJobDates(job)}`,
      ];

      if (job.blurb) {
        lines.push('', job.blurb);
      }

      if (job.keyAchievements?.length) {
        lines.push('', '### Key Achievements', '');
        lines.push(...job.keyAchievements.map((achievement) => `- ${achievement}`));
      }

      return lines.join('\n');
    })
    .join('\n\n');

  return `${frontmatter}\n${sections}\n`;
}

async function main() {
  await mkdir(contentDir, { recursive: true });

  const source = await readFile(inputFile, 'utf8');
  const companies = normalizeCompanies(parseCompaniesSource(source));

  for (const company of companies) {
    const slug = slugifySegment(company.title);
    const document = buildCompanyMdxDocument({
      ...company,
      slug,
    });
    const outputPath = path.join(contentDir, `${slug}.mdx`);
    await writeFile(outputPath, document, 'utf8');
  }

  console.log(`Converted ${companies.length} experience companies to MDX.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
