import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildCompanyMdxDocument,
  normalizeCompanies,
  parseCompaniesSource,
  sortJobsByStartDateDesc,
} from './convert-experience-array-to-mdx.mjs';

test('parseCompaniesSource extracts the companies array from jobs.ts', () => {
  const source = `
interface Job {}
const companies = [
  { id: 1, title: 'Hive IT', jobs: [{ id: 1, title: 'Engineer', location: 'Sheffield', startDate: '01/01/2020' }] }
];
export default companies;
`;

  const companies = parseCompaniesSource(source);

  assert.equal(companies.length, 1);
  assert.equal(companies[0].title, 'Hive IT');
});

test('sortJobsByStartDateDesc orders newest roles first', () => {
  const jobs = [
    { title: 'Junior', startDate: '01/01/2020' },
    { title: 'Senior', startDate: '01/01/2022' },
  ];

  const result = sortJobsByStartDateDesc(jobs);

  assert.deepEqual(result.map((job) => job.title), ['Senior', 'Junior']);
});

test('sortJobsByStartDateDesc respects explicit sortOrder when present', () => {
  const jobs = [
    { title: 'Sporting Life', startDate: '06/01/2025', sortOrder: 2 },
    { title: 'Sky Betting & Gaming', startDate: '14/08/2023', endDate: '14/11/2024', sortOrder: 1 },
  ];

  const result = sortJobsByStartDateDesc(jobs);

  assert.deepEqual(result.map((job) => job.title), ['Sky Betting & Gaming', 'Sporting Life']);
});

test('normalizeCompanies merges sky betting and sporting life under flutter uki', () => {
  const companies = normalizeCompanies([
    {
      title: 'Sky Betting & Gaming',
      jobs: [
        {
          title: 'Software Engineer',
          location: 'Leeds, UK',
          startDate: '14/08/2023',
          endDate: '14/11/2024',
        },
      ],
    },
    {
      title: 'Flutter UKI',
      jobs: [
        {
          title: 'Software Developer',
          location: 'Leeds, UK',
          startDate: '06/01/2025',
        },
      ],
    },
  ]);

  assert.equal(companies.length, 1);
  assert.equal(companies[0].title, 'Flutter UKI');
  assert.deepEqual(
    companies[0].jobs.map((job) => [job.title, job.roleTitle]),
    [
      ['Sky Betting & Gaming', 'Software Engineer'],
      ['Sporting Life', 'Software Developer'],
    ],
  );
});

test('buildCompanyMdxDocument renders company and role sections', () => {
  const document = buildCompanyMdxDocument({
    slug: 'hive-it',
    title: 'Hive IT',
    jobs: [
      {
        title: 'Junior Software Tester',
        location: 'Sheffield, UK',
        startDate: '05/10/2020',
        endDate: '01/05/2021',
        blurb: 'Started in testing.',
        keyAchievements: ['Built testing skills'],
      },
      {
        title: 'Software Engineer',
        location: 'Sheffield, UK',
        startDate: '01/05/2022',
        endDate: '11/08/2023',
        blurb: 'Worked on government and charity projects.',
        keyAchievements: ['Improved internal processes'],
      },
    ],
  });

  assert.match(document, /^---\ntitle: "Hive IT"/);
  assert.match(document, /\nslug: "hive-it"\n/);
  assert.match(document, /from: 2020-10-05/);
  assert.match(document, /to: 2023-08-11/);
  assert.match(document, /isPresent: false/);
  assert.match(document, /## Software Engineer/);
  assert.match(document, /\*\*Location:\*\* Sheffield, UK/);
  assert.match(document, /\*\*Dates:\*\* 01\/05\/2022 - 11\/08\/2023/);
  assert.match(document, /- Improved internal processes/);
});
