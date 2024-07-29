import noop from 'lodash/noop';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface Toast {
  id?: string;
  title?: string;
  content: string;
}

export interface ToastContextState {
  toasts: Toast[];
  setToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

export interface ToastContextProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ToastContextState>({
  removeToast: noop,
  setToast: noop,
  toasts: [],
});

export default function ToastContextProvider({
  children,
}: ToastContextProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const setToast = useCallback<ToastContextState['setToast']>(
    toast => {
      setToasts(prevToasts => [...prevToasts, toast]);
    },
    [setToasts],
  );

  const removeToast = useCallback<ToastContextState['removeToast']>(id => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  const state = useMemo<ToastContextState>(() => {
    return {
      toasts,
      setToast,
      removeToast,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts, removeToast]);

  return (
    <ToastContext.Provider value={state}>{children}</ToastContext.Provider>
  );
}

export function useToast(): ToastContextState {
  const toast = useContext(ToastContext);
  if (!toast) {
    throw new Error('useToast must be used within a ToastContextProvider');
  }

  return toast;
}
