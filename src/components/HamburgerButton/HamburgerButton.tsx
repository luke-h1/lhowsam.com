import { useHeaderContext } from '@frontend/context/HeaderContext';
import classNames from 'classnames';
import styles from './HamburgerButton.module.scss';

const HamburgerButton = () => {
  const { menuVisible, toggleMenu } = useHeaderContext();

  return (
    <button
      aria-haspopup="true"
      aria-controls="navigation"
      aria-expanded={menuVisible}
      onClick={toggleMenu}
      type="button"
      className={classNames(styles.hamburger, {
        [styles.hamburgerOpen]: menuVisible,
      })}
    >
      <span className="visually-hidden">
        {menuVisible ? 'Close' : 'Open'} menu
      </span>
    </button>
  );
};
export default HamburgerButton;
