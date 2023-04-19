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
            url: process.env.NEXT_PUBLIC_SANITY_GQL_URL,
            headers: {},
          },
        },
      },
    },
  },
};
