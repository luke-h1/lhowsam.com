/* eslint-disable */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    './src/pages/*.ts',
    './src/pages/_*.tsx',
    '!./src/pages/_*.ts',
    '!./src/pages/*.tsx',
    './src/md/**/*.mdx',
    '!./src/pages/_*.js',
    '!./src/pages/api',
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('./src/', '')
                  .replace('md/project', 'projects')
                  .replace('md/blog', 'blog')
                  .replace('.public', '/')
                  .replace('md', '')
                  .replace('.js', '')
                  .replace('.ts', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.x', '');
                const route = path === '/index' ? '' : path;
                return `
      <url>
        <loc>${`https://lhowsam.com/${route}`}</loc>
      </url>
      `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();
