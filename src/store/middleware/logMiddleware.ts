import { PayloadAction } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import { Middleware } from 'redux';

export const logMiddleware: Middleware =
  () => next => (action: PayloadAction<unknown>) => {
    // use document.cookie="debug=1" to enable logging
    if (cookies.get('debug') === 'true') {
      // eslint-disable-next-line no-console
      console.info('Action:', action);
    }

    return next(action);
  };
