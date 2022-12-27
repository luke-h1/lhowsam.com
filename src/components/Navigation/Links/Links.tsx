import ListItem from '@frontend/components/ListItem/ListItem';
import { useHeaderContext } from '@frontend/context/HeaderContext';
import classNames from 'classnames';
import styles from './Links.module.scss';

const Links = () => {
  const { menuVisible } = useHeaderContext();

  return (
    <ul
      className={classNames(styles.list, {
        [styles.active]: menuVisible,
      })}
      id="navigation"
    >
      <ListItem title="Home" href="/" />
      <ListItem title="About" href="/about" />
      <ListItem title="Blog" href="/blog" />
      <ListItem title="Projects" href="/projects" />
      <ListItem title="Contact" href="/contact" />
    </ul>
  );
};
export default Links;
