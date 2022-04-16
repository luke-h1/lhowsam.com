import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

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
