import { KBarSearch } from 'kbar';
import SearchIcon from '../../../../../public/icons/search.svg';
import styles from './KbarInput.module.scss';

const KbarInput = () => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <KBarSearch defaultPlaceholder="search" className={styles.search} />
    </label>
  );
};
export default KbarInput;
