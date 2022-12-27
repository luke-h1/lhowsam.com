import { useKBar, VisualState } from 'kbar';
import CloseIcon from '../../../../../public/icons/close.svg';
import styles from './KbarHeaderBrowser.module.scss';

const KbarHeaderBrowser = () => {
  const { query } = useKBar(state => ({
    visualState: state.visualState,
    showing: state.visualState !== VisualState.hidden,
  }));

  const hideNavigationActionsMenu = () => {
    document.documentElement.style.overflowY = 'unset';
    query.setVisualState(VisualState.animatingOut);
  };

  return (
    <header className={styles.header}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.browserSearch} />
      <button
        onClick={hideNavigationActionsMenu}
        aria-controls="kbar-navigation"
        className={styles.close}
        type="button"
      >
        <span className="visually-hidden">close</span>
        <CloseIcon />
      </button>
    </header>
  );
};
export default KbarHeaderBrowser;
