import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Toast {
  id?: string;
  title?: string;
  content: string;
}

interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<Toast>) => {
      const id = nanoid();
      const { title, content } = action.payload;

      state.toasts.push({ id, title, content });

      return state;
    },

    removeToast: (state, action: PayloadAction<string>) => {
      const index = state.toasts.findIndex(
        toast => toast.id === action.payload,
      );

      if (index === -1) {
        return {
          toasts: state.toasts,
        };
      }

      return {
        toasts: [
          ...state.toasts.slice(0, index),
          ...state.toasts.slice(index + 1),
        ],
      };
    },
  },
});

export const { setToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
