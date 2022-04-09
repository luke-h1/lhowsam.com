import { useMounted } from '@src/hooks/useMounted';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './themechanger.module.scss';

const ThemeChanger = () => {
  const { isMounted } = useMounted();
  const { theme, setTheme } = useTheme();

  if (!isMounted) return <div className={styles.wrapper} />;

  return (
    <div>
      {theme === 'light' ? (
        <FiMoon
          onClick={() => setTheme('dark')}
          cursor="pointer"
          fontSize="20px"
          color="#000"
        />
      ) : (
        <FiSun
          onClick={() => setTheme('light')}
          cursor="pointer"
          color="yellow"
          fontSize="20px"
        />
      )}
    </div>
  );
};

export default ThemeChanger;
