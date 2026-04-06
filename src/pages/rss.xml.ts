import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '../config/site';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

type FeedEntry =
  | {
      kind: 'blog' | 'work';
      title: string;
      slug: string;
      intro: string;
      publishedAt: Date;
    }
  | {
      kind: 'project';
      title: string;
      slug: string;
      intro: string;
      order: number;
    };

function getSortTime(entry: FeedEntry): number {
  return entry.kind === 'project' ? 0 : entry.publishedAt.getTime();
}

function compareFeedEntries(a: FeedEntry, b: FeedEntry): number {
  const diff = getSortTime(b) - getSortTime(a);
  if (diff !== 0) {
    return diff;
  }
  if (a.kind === 'project' && b.kind === 'project') {
    const byOrder = a.order - b.order;
    return byOrder !== 0 ? byOrder : a.slug.localeCompare(b.slug);
  }

  return a.slug.localeCompare(b.slug);
}

function entryPath(entry: FeedEntry): string {
  if (entry.kind === 'blog') {
    return `/blog/${entry.slug}/`;
  }
  if (entry.kind === 'work') {
    return `/work-projects/${entry.slug}/`;
  }
  return `/projects/${entry.slug}/`;
}

function entryToItemXml(entry: FeedEntry): string {
  const path = entryPath(entry);
  const url = `${siteConfig.siteUrl}${path}`;
  const pubDateLine =
    entry.kind === 'project'
      ? ''
      : `\n  <pubDate>${entry.publishedAt.toUTCString()}</pubDate>`;

  return `<item>
  <title>${escapeXml(entry.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <description>${escapeXml(entry.intro)}</description>${pubDateLine}
</item>`;
}

export async function GET() {
  const [posts, workProjects, projects] = await Promise.all([
    getCollection('blog', ({ data }: CollectionEntry<'blog'>) => {
      return import.meta.env.PROD ? !data.draft : true;
    }),
    getCollection(
      'workProjects',
      ({ data }: CollectionEntry<'workProjects'>) => {
        return import.meta.env.PROD ? !data.draft : true;
      },
    ),
    getCollection('projects'),
  ]);

  const entries: FeedEntry[] = [
    ...posts.map(
      (post: CollectionEntry<'blog'>): FeedEntry => ({
        kind: 'blog',
        title: post.data.title,
        slug: post.data.slug,
        intro: post.data.intro,
        publishedAt: post.data.publishedAt,
      }),
    ),
    ...workProjects.map(
      (wp: CollectionEntry<'workProjects'>): FeedEntry => ({
        kind: 'work',
        title: wp.data.title,
        slug: wp.data.slug,
        intro: wp.data.intro,
        publishedAt: wp.data.publishedAt,
      }),
    ),
    ...projects.map(
      (project: CollectionEntry<'projects'>): FeedEntry => ({
        kind: 'project',
        title: project.data.title,
        slug: project.data.slug,
        intro: project.data.intro,
        order: project.data.order ?? 999,
      }),
    ),
  ];

  entries.sort(compareFeedEntries);

  const items = entries.map(entryToItemXml).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(siteConfig.authorName)}</title>
  <link>${siteConfig.siteUrl}/</link>
  <description>${escapeXml(
    'Blog posts, client and product work, and personal projects from Luke Howsam — software development, React Native, TypeScript, and DevOps.',
  )}</description>
  <language>en-gb</language>
  ${items}
</channel>
</rss>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
