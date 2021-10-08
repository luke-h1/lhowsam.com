import axios from 'axios';

const { GITHUB_TOKEN } = process.env;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});
export default githubApi;
