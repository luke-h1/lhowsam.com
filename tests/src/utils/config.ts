import path from 'path';

export const projectRoot = path.resolve(__dirname, '..', '..');

export const isMac = process.platform === 'darwin';
