export const sleep = (ms: number) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise(resolve => setTimeout(resolve, ms));
};
