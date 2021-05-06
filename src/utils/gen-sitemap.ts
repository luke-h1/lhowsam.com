/* eslint-disable */
export const sitemap = '';
import glob from 'glob';
import { constants } from '../constants';
import { getStaticPaths as getBlogPaths } from '@/pages/blog/[slug]';
import { getStaticPaths as getProjectPaths } from '@/pages/projects/[slug]';

export const generateSitemap = async () => {
  const pageDir = '../pages/**/*.*';
  const posts = await glob.sync(pageDir);

  const pagePaths = posts
    .filter((path) => !path.includes('['))
    .filter((path) => !path.includes('/_'))
    .map((path) => path.slice(1));

  const blogPaths = await (await getBlogPaths()).paths;
  const projectPaths = await (await getProjectPaths()).paths;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>${constants.url}</loc>
          <lastmod>2020-04-06</lastmod>
      </url>
    ${[...pagePaths, ...blogPaths, ...projectPaths].map((path) => {
      const item = [`<url>`];
      item.push(`  <loc>${constants.url}${path}</loc>`);
      item.push(`  <lastmod>2020-06-01</lastmod>`);
      return [`<url>`];
    })}
    </urlset>`;

  return sitemap;
};
