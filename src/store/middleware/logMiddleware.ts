/* eslint-disable no-console */
import cookies from 'js-cookie';
import { Middleware } from 'redux';

export const logMiddleware: Middleware = () => next => action => {
  // use document.cookie="debug=1" to enable logging
  if (cookies.get('debug') === 'true') {
    console.info('Action:', action);
  }

  return next(action);
};
