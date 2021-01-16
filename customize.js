/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `lhowsam`, // Displayed in header
  description: `personal prortfolio`, // Site description
  maxWidth: "768px", // Max width of website
  enableAbout: true, // Enables about page
  siteUrl: `https://lhowsam.com/`, // For sitemap & RSS feed
  useScrollIndicator: true, // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `Luke Howsam`, // Name shows on profile
  profileDescription: "{Edit me in customize.js}", // Shows under author name
  profileImageName: `profile.jpeg`, // Place profile.jpg/.jpeg/.png in _assets folder
  location: "Sheffield, Uk", // Location under profileDescription. "" --> disabled
  footerLink: "", // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email: { emailAddress: "luke.howsam@yahoo.com", showHeaderIcon: true },
    github: { accountName: "luke-h1", showHeaderIcon: true },
    twitter: { accountName: "", showHeaderIcon: true },
    linkedIn: { accountName: "", showHeaderIcon: true }, // Use URL after "linkedin.com/"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: true, twitter: true, linkedIn: true },

  /* Comments
  ========================================= */
  comments: {
    disqus: { enabled: true, shortName: "" }, // Check your shortName on https://disqus.com
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light", // Options: dark / light -- applied to first visitors
  showTimeToRead: false, // Shows time to read for each post in main page
  breakCodeLines: true, // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-code.png`, // Favicon
  gaTrackingId: ``, // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``, // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
