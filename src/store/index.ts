import { configureStore } from '@reduxjs/toolkit';
import { logMiddleware } from './middleware/logMiddleware';
import toastReducer from './reducers/toastReducer';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
