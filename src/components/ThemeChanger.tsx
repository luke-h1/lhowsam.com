import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useMounted } from '../hooks/useMounted';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  if (!isMounted) return null;

  return (
    <div>
      {theme === 'light' ? (
        <FiMoon
          onClick={() => setTheme('dark')}
          cursor="pointer"
          fontSize="20px"
          color="#000"
          data-testid="dark-mode"
        />
      ) : (
        <FiSun
          data-testid="light-mode"
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
