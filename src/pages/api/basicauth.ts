import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader('WWW-Authenticate', 'Basic realm="Access to dev.lhowsam.com"');
  res.statusCode = 401;
  res.end('Access denied');
}
