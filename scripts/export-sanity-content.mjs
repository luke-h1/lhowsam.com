import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const projectId = 'wdj6ou2i';
export const dataset = 'production';
export const apiVersion = '2022-09-21';
export const outputDir = path.resolve(process.cwd(), 'sanity-content');

const imageProjection = `
  image {
    ...,
    asset-> {
      ...
    }
  }
`;

const tagProjection = `
  "tags": coalesce(tags[]-> {
    ...
  }, [])
`;

export const queries = {
  blogPosts: `
    *[_type == "post"] | order(publishedAt desc) {
      ...,
      slug {
        current
      },
      ${imageProjection},
      ${tagProjection}
    }
  `,
  projects: `
    *[_type == "project"] | order(order asc, title asc) {
      ...,
      slug {
        current
      },
      ${imageProjection},
      ${tagProjection}
    }
  `,
  experience: `
    *[_type == "work"] | order(publishedAt desc) {
      ...,
      slug {
        current
      },
      ${imageProjection},
      videos[] {
        ...,
        video {
          ...,
          asset-> {
            ...
          }
        }
      }
    }
  `,
};

async function fetchSanityQuery(query) {
  const url = new URL(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`,
  );

  url.searchParams.set('query', query);

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Sanity query failed (${response.status}): ${body}`);
  }

  const payload = await response.json();

  if (!('result' in payload)) {
    throw new Error('Sanity response did not include a result field');
  }

  return payload.result;
}

async function writeJsonFile(filename, data) {
  const filePath = path.join(outputDir, filename);
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  return filePath;
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const [blogPosts, projects, experience] = await Promise.all([
    fetchSanityQuery(queries.blogPosts),
    fetchSanityQuery(queries.projects),
    fetchSanityQuery(queries.experience),
  ]);

  const outputs = await Promise.all([
    writeJsonFile('blog-posts.json', blogPosts),
    writeJsonFile('projects.json', projects),
    writeJsonFile('experience.json', experience),
  ]);

  const summary = {
    exportedAt: new Date().toISOString(),
    projectId,
    dataset,
    counts: {
      blogPosts: blogPosts.length,
      projects: projects.length,
      experience: experience.length,
    },
    files: outputs,
  };

  await writeJsonFile('summary.json', summary);

  console.log('Exported Sanity content to sanity-content/');
  console.log(JSON.stringify(summary.counts, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
