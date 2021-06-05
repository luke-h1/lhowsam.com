import { config } from '@keystone-next/keystone/schema';
import { statelessSessions } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import keystone from '@keystonejs/keystone';
import { lists } from './schema';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production',
    );
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

const sessionMaxAge = 60 * 60 * 24 * 3; // 3 days

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'name',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

export default withAuth(
  config({
    db: {
      adapter: 'prisma_postgresql',
      url: process.env.DATABASE_URL || 'postgres://lhowsam@localhost:5432',
      async onConnect() {
        console.log('✨ Connected to postgreSQL DB ✅');
      },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data, // only show UI for people who pass this test
    },
    server: {
      port: 5000,
      cors: {
        origin:
          process.env.NODE_ENV !== 'production'
            ? '*'
            : process.env.FRONTEND_URL,
        credentials: true,
      },
    },
    lists,
    session,
  }),
);
