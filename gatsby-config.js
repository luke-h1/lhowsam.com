require("dotenv").config({
  path: `.env`,
})
const { GOOGLE_ANALYTICS_KEY } = process.env
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const rss = require("./gatsby-rss")
const website = require('./config/website')

module.exports = {

  siteMetadata: {
    siteUrl: website.url + website.pathPrefix,
    pathPrefix: website.pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: './src/images/banner.png',
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-emoji`,
    rss,

    // Read markdown/mdx files
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `./src/data/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post-images`,
        path: `${__dirname}/_posts/images`,
      },
    },
    // mdx support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // Adding title to code blocks. Usage: ```js:title=example.js
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "code-title-custom",
            },
          },
          // Process images in markdown
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: "768",
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/_posts`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },

    // Using svg as component
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /_assets/,
        },
      },
    },

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // Removes warnings trying to use non-gatsby image in markdown
        checkSupportedExtensions: false,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Somehow need to be defined under both gatsby-plugin-mdx & gatsby-transformer-remark to work
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: "768",
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://lhowsam.com",
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        start_url: website.pathPrefix,
        display: `standalone`,
        theme_color: website.themeColor,
        background_color: website.backgroundColor,
        icon: './src/images/logo512.png',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `dummy`,
        path: `${__dirname}/src/z_`,
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    // `gatsby-plugin-offline`
  ].filter(Boolean),
}
