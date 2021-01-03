const { GOOGLE_ANALYTICS_KEY } = process.env;

module.exports = {
  siteMetadata: {
    title: 'lhowsam',
    author: {
      name: 'Luke howsam',
      summary: 'who lives and works in Sheffield.',
    },
    description:
      'My personal portfolio built with Gatsby & styled components :) ',
    siteUrl: 'https://lhowsam.com',
    social: {
      twitter: 'lukeH_1999',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
      },
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './content/project',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://lhowsam.com',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${GOOGLE_ANALYTICS_KEY}`,
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lhowsam.com',
        short_name: 'lhowsam.com',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'content/assets/logo512.png',
      },
    },
    'gatsby-plugin-react-helmet',
    // `gatsby-plugin-offline`,
  ],
};
