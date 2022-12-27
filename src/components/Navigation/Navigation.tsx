import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { KBarProvider } from 'kbar';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import { SkipLink } from '../SkipLink/SkipLink';
import Actions from './Actions/Actions';
import Navbar from './Navbar/Navbar';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <KBarProvider
      options={{
        enableHistory: true,
        disableDocumentLock: true,
        callbacks: {
          // eslint-disable-next-line no-return-assign
          onOpen: () => (document.documentElement.style.overflowY = 'hidden'),
          onClose: () => {
            document.documentElement.style.overflowY = 'scroll';
            clearAllBodyScrollLocks();
          },
          onSelectAction: action => {
            if (action.id !== 'blogSearch')
              document.documentElement.style.overflowY = 'scroll';
          },
        },
      }}
    >
      <nav className={styles.wrapper}>
        <SkipLink />
        <div className={styles.links}>
          <Navbar />
        </div>
        <Actions />
        <HamburgerButton />
      </nav>
    </KBarProvider>
  );
};

export default Navigation;
