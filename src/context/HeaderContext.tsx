import { isServer } from '@frontend/hooks/isServer';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface State {
  menuVisible: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

interface Props {
  children: ReactNode;
}

const HeaderContext = createContext<State | undefined>(undefined);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error(
      'UseHeaderContext must be used within a useHeaderContext provider',
    );
  }
  return context;
};

const HeaderContextProvider = ({ children }: Props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuVisible(prevMenuVisible => {
      if (!isServer) {
        const navigation = document.querySelector('#navigation') as HTMLElement;
        if (!prevMenuVisible) {
          disableBodyScroll(navigation);
        } else {
          enableBodyScroll(navigation);
        }
      }
      return !prevMenuVisible;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuVisible(() => {
      if (!isServer) {
        const navigation = document.querySelector('#navigation') as HTMLElement;
        enableBodyScroll(navigation);
      }
      return false;
    });
  }, []);

  const contextState: State = useMemo(() => {
    return {
      menuVisible,
      toggleMenu,
      closeMenu,
    };
  }, [menuVisible, toggleMenu, closeMenu]);

  return (
    <HeaderContext.Provider value={contextState}>
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContextProvider;
