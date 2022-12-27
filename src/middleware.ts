/* eslint-disable no-case-declarations */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  switch (process.env.NEXT_PUBLIC_URL) {
    case 'https://dev.lhowsam.com':
      const basicAuth = req.headers.get('Authorization')?.split(' ')[1];
      const url = req.nextUrl;
      if (basicAuth) {
        const [username, password] = Buffer.from(basicAuth, 'base64')
          .toString()
          .split(':');

        if (
          username === process.env.BASIC_AUTH_USER &&
          password === process.env.BASIC_AUTH_PASSWORD
        ) {
          return NextResponse.next();
        }
      }
      url.pathname = '/api/basicauth';
      return NextResponse.rewrite(url);

    // production
    default:
      return NextResponse.next();
  }
}

export const config = {
  matcher: '/:path*',
};
