const siteUrl = process.env.NEXT_PUBLIC_URL;

function getPolicies() {
  switch (siteUrl) {
    case 'https://www.lhowsam.com':
    case 'https://lhowsam.com/':
      return [{ userAgent: '*', allow: '/' }];

    default:
      // prevent Google from crawling/indexing the site by default
      return [{ userAgent: 'Googlebot', disallow: '/' }];
  }
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: getPolicies(),
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
};
