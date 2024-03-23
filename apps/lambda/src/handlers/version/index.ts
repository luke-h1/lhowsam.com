import pkg from '../../../package.json';

const versionHandler = async () => {
  return JSON.stringify({ version: pkg.version });
};
export default versionHandler;
