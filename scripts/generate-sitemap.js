const fs = require('fs');
const globby = require('globby');

const generateSitemap = async () => {
  const pages = await globby([
    'pages/**/*.{ts,tsx,mdx}',
    'data/**/*.mdx',
    '!pages/**/[*.{ts,tsx}',
    '!pages/_*.{ts,tsx}',
    '!pages/api',
  ]);

  const urlSet = pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('data', '')
        .replace(/(.tsx|.ts)/, '')
        .replace('.mdx', '');
      const route = path === '/index' ? '' : path;
      return `<url><loc>https://lhowsam.com${route}</loc></url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

module.exports = generateSitemap;
