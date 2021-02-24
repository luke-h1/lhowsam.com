import axios from 'axios';
import asyncHandler from 'express-async-handler';
import { NextApiRequest, NextApiResponse } from 'next';

const projects = asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
  const res = await axios.get('https://api.github.com/users/luke-h1/repos');
  const data = await res.json()
});
