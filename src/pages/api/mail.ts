/* eslint-disable no-shadow */
import rateLimit from 'express-rate-limit';
import * as sendGrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendGrid.setApiKey(process.env.SEND_GRID_API_KEY);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
});

export function middleware(
  req: NextApiRequest,
  _res: NextApiResponse,
  fn: unknown,
) {
  return new Promise((res, rej) => {
    // @ts-ignore
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return rej(result);
      }
      return res(result);
    });
  });
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method as keyof typeof handlers;

  const handlers = {
    POST: async () => {
      await middleware(req, res, limiter);
      const body = JSON.parse(req.body);

      // not filled out form correctly
      if (!body.name || !body.email || !body.text) {
        return res.json({
          error: 'Please fill in all fields',
          status: 'error',
          required_fields: ['name', 'email', 'text'],
        });
      }
      const mail: sendGrid.MailDataRequired = {
        to: process.env.TO_EMAIL,
        from: process.env.TO_EMAIL,
        subject: `Email from ${body.name}`,
        html: `
        Email from: <h1>${body.email}</h1>: 
        <br /> 
        <br /> 
        ${body.text}, 
        `,
      };
      try {
        await sendGrid.send(mail);
        return res.json({ status: 'success' });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return res.json({
          status: 'error',
          error: 'An unexpected error occured. Try again later',
        });
      }
    },
  };
  const handler = handlers[method];
  if (!handler) {
    return res.status(405).send('Method not allowed');
  }
  return handler();
}
