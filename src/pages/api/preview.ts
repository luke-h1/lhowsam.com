import { NextApiRequest, NextApiResponse } from 'next';

const previewHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({});
  res.writeHead(307, { Location: '/' }).end();
};
export default previewHandler;
