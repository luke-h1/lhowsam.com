const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
  projects: {
    app: {
      schema: ['./schema.generated.graphql'],
      documents: ['./src/graphql/**/*.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: process.env.HYGRAPH_URL,
            headers: { Authorization: `Bearer ${process.env.CMS_PROD_TOKEN}` },
          },
        },
      },
    },
  },
};
