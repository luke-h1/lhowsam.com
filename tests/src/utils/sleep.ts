/* eslint-disable */
const sleep = (ms: number): Promise<void> =>
  new Promise(res => setTimeout(res, ms));

export default sleep;
