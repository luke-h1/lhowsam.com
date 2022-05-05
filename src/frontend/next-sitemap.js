const siteUrl = process.env.NEXT_PUBLIC_URL;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
};
