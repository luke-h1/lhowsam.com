const rss = require("./gatsby-rss")

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-sass',
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Read images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/_assets`,
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
              maxWidth: '768',
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
              maxWidth: '768',
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-blog-mdx`,
        short_name: `blog`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: 'src/images/logo512.png',

      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `dummy`,
        path: `${__dirname}/src/z_`,
      },
    },
  ],
}
