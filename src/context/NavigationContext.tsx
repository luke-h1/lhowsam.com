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
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavigationContext = createContext<
  NavigationContextState | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

export const NavigationContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

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
