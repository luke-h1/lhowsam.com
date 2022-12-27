import { useHeaderContext } from '@frontend/context/HeaderContext';
import Link from 'next/link';
import styles from './ListItem.module.scss';

interface Props {
  title: string;
  href: string;
}

const ListItem = ({ title, href }: Props) => {
  const { closeMenu } = useHeaderContext();
  return (
    <li className={styles.item}>
      <Link href={href} onClick={closeMenu} className={styles.link}>
        {title}
      </Link>
    </li>
  );
};
export default ListItem;
