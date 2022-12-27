import { useKBar, VisualState } from 'kbar';
import Kbar from '../Kbar/Kbar';
import styles from './Actions.module.scss';

const Actions = () => {
  const { query, showing } = useKBar(state => ({
    visualState: state.visualState,
    showing: state.visualState !== VisualState.hidden,
  }));

  const showNavigationActionsMenu = () => {
    document.documentElement.style.overflowY = 'hidden';
    query.setVisualState(VisualState.animatingIn);
  };

  return (
    <div className={styles.wrapper}>
      {showing && <div className={styles.backdrop} />}
      {/* <Link href="/newsletter">
        <a className={styles.newsletter}>Newsletter</a>
      </Link> */}
      <Kbar />
      <button
        type="button"
        onClick={showNavigationActionsMenu}
        aria-controls="kbar-navigation"
        className={styles.search}
        data-testid="kbar-toggle"
      >
        ⌘K
        <span className="visually-hidden">Search</span>
      </button>
    </div>
  );
};
export default Actions;
