import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button className="hover:text-orange-600" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} type="button">
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default ThemeChanger;
