require('dotenv').config({
  path: `.env`,
});
const { GOOGLE_ANALYTICS_KEY } = process.env;
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    title: `lhowsam`,
    author: {
      name: 'Luke Howsam',
      summary: 'Who lives & works in Sheffield, UK',
    },
    description: `My personal portfolio made with Gatsby, Graphql, styled-components & MDX`,
    social: {
      twitter: 'lukeH_1999',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-copy-linked-files`, `gatsby-remark-smartypants`],
        defaultLayouts: {
          default: require.resolve('./src/templates/Post.tsx'),
        },
        rehypePlugins: [
          require('rehype-slug'),
          // To pass options, use a 2-element array with the
          // configuration in an object in the second element
          [require('rehype-autolink-headings'), { behavior: 'wrap' }],
        ],
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: node => node.internal.type === `Mdx`,
        source: node => node.html,
        contextFields: [],
        fragment: true,
        space: `html`,
        emitParseErrors: false,
        verbose: false,
        plugins: [],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `luke-howsam-portfolio`,
        short_name: `luke-howsam-portfolio`,
        start_url: `/`,
        theme_color: '#ffffff',
        background_color: '#000',
        display: `minimal-ui`,
        icon: 'src/images/logo512.png',
      },
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
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    // `gatsby-plugin-offline`,
  ].filter(Boolean),
};
