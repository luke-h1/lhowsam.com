import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

export function withMethods(methods: Method[], handler: NextApiHandler) {
  // eslint-disable-next-line func-names
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (!methods.includes(req.method as Method)) {
      return res.status(405).end();
    }

    return handler(req, res);
  };
}
