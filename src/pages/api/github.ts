import { NextApiResponse, NextApiRequest } from 'next';
import githubService from '../../services/githubService';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await githubService.fetchData();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600',
  );
  return res.status(200).json({
    starredRepos: data.data.user.starredRepositories.nodes.reverse(),
    contributedRepos: data.data.user.repositoriesContributedTo.nodes.reverse(),
  });
}
