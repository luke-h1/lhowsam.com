import noop from 'lodash/noop';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface NavigationContextState {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | (() => void);
}

export const NavigationContext = createContext<NavigationContextState>({
  open: false,
  setOpen: () => noop,
});

interface Props {
  children: ReactNode;
}

export const NavigationContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const contextState: NavigationContextState = useMemo(() => {
    return {
      open,
      setOpen,
    };
  }, [open]);

  return (
    <NavigationContext.Provider value={contextState}>
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigationContext(): NavigationContextState {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      'useNavigationContext must be used within a NavigationContextProvider',
    );
  }

  return context;
}
