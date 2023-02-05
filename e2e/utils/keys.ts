export const getMetaKey = () => {
  if (process.platform === 'darwin') {
    return 'Meta';
  }
  return 'Control';
};
