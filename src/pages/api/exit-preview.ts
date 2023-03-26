import { NextApiRequest, NextApiResponse } from 'next';

const previewExitHandler = async (
  _req: NextApiRequest,
  res: NextApiResponse,
) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' }).end();
};
export default previewExitHandler;
