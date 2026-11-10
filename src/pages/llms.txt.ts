import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '../config/site';

interface LinkItem {
  title: string;
  path: string;
  intro: string;
  sortTime: number;
}

function toLine({ title, path, intro }: LinkItem): string {
  const url = `${siteConfig.siteUrl}${path}`;
  return intro ? `- [${title}](${url}): ${intro}` : `- [${title}](${url})`;
}

function section(heading: string, items: LinkItem[]): string {
  if (items.length === 0) {
    return '';
  }
  const lines = [...items]
    .sort((a, b) => b.sortTime - a.sortTime)
    .map(toLine)
    .join('\n');
  return `## ${heading}\n\n${lines}\n`;
}

export async function GET() {
  const [posts, workProjects, projects, talks] = await Promise.all([
    getCollection('blog', ({ data }: CollectionEntry<'blog'>) =>
      import.meta.env.PROD ? !data.draft : true,
    ),
    getCollection(
      'workProjects',
      ({ data }: CollectionEntry<'workProjects'>) =>
        import.meta.env.PROD ? !data.draft : true,
    ),
    getCollection('projects'),
    getCollection('talks', ({ data }: CollectionEntry<'talks'>) =>
      import.meta.env.PROD ? !data.draft : true,
    ),
  ]);

  const blogItems: LinkItem[] = posts.map((post: CollectionEntry<'blog'>) => ({
    title: post.data.title,
    path: `/blog/${post.data.slug}/`,
    intro: post.data.intro,
    sortTime: post.data.publishedAt.getTime(),
  }));

  const workItems: LinkItem[] = workProjects.map(
    (wp: CollectionEntry<'workProjects'>) => ({
      title: wp.data.title,
      path: `/work-projects/${wp.data.slug}/`,
      intro: wp.data.intro,
      sortTime: wp.data.publishedAt.getTime(),
    }),
  );

  const projectItems: LinkItem[] = projects.map(
    (project: CollectionEntry<'projects'>) => ({
      title: project.data.title,
      path: `/projects/${project.data.slug}/`,
      intro: project.data.intro,
      sortTime: -(project.data.order ?? 999),
    }),
  );

  const talkItems: LinkItem[] = talks.map((talk: CollectionEntry<'talks'>) => ({
    title: talk.data.title,
    path: `/talks/${talk.data.slug}/`,
    intro: talk.data.intro,
    sortTime: talk.data.publishedAt.getTime(),
  }));

  const body = `# ${siteConfig.authorName}

> ${siteConfig.defaultDescription}

## Pages

- [About](${siteConfig.siteUrl}/about): Background, experience, and roles.
- [How I work](${siteConfig.siteUrl}/how-i-work): Engineering principles and working style.
- [Blog](${siteConfig.siteUrl}/blog): All blog posts.
- [Projects](${siteConfig.siteUrl}/projects): Personal projects.
- [Work projects](${siteConfig.siteUrl}/work-projects): Client and product work.
- [Talks](${siteConfig.siteUrl}/talks): Conference and meetup talks.

${section('Blog posts', blogItems)}
${section('Projects', projectItems)}
${section('Work projects', workItems)}
${section('Talks', talkItems)}
## Optional

- [RSS feed](${siteConfig.siteUrl}/rss.xml): Full feed of posts and projects.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
