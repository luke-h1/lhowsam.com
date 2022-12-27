import classNames from 'classnames';
import type { ActionImpl } from 'kbar';
import styles from './KbarItem.module.scss';

interface Props {
  action: ActionImpl;
  active: boolean;
}

const KbarItem = ({ action, active }: Props) => {
  return (
    <div className={styles.itemWrapper}>
      <div
        className={classNames(styles.item, {
          [styles.itemActive]: active,
        })}
      >
        {action.name}
      </div>
    </div>
  );
};
export default KbarItem;
