import { NextApiRequest, NextApiResponse } from 'next';
import { RepoResponse } from '@src/types/github';

const QTY = 5;
const ENDPOINT = 'https://api.github.com/graphql';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, githubToken } = req.body;
  const query = `
    query {
      user (login: "${username}") {
        repositoriesContributedTo(last: ${QTY}, privacy: PUBLIC, includeUserRepositories: true, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
          nodes {
            id
            name
            url
            description
            owner {
              login
            }
          }
        }
        starredRepositories(last: ${QTY}) {
          nodes {
            id
            name
            description
            url
            owner {
              login
            }
          }
        }
      }
    }`;

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${githubToken}`,
    },
    body: JSON.stringify({ query }),
  });
  const { data }: { data: RepoResponse } = await response.json();
  res.status(200).json({
    starredRepos: data.user.starredRepositories.nodes.reverse(),
    contributedRepos: data.user.repositoriesContributedTo.nodes.reverse(),
  });
  res.end();
};
