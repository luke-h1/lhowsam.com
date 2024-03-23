const healthHandler = async (): Promise<string> => {
  return JSON.stringify({
    message: 'Healthy',
    status: 'OK',
  });
};
export default healthHandler;
