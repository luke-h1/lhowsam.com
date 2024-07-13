import CommandMenu, { CommandMenuProps } from '../CommandMenu/CommandMenu';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import * as styles from './CommandMenuBanner.css';

type Props = CommandMenuProps;

const CommandMenuBanner = ({ setOpen, open }: Props) => {
  return (
    <>
      <header className={styles.banner}>
        <button
          className={styles.toggle}
          onClick={() => setOpen(true)}
          data-testid="cmdk-icon"
          type="button"
        >
          <VisuallyHidden>Open command menu</VisuallyHidden>
          <span className={styles.toggleHighlight} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
        </button>
      </header>
      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};
export default CommandMenuBanner;
