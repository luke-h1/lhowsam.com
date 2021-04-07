import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useMounted } from '@src/hooks/useMounted';

export const Toggle = () => {
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  if (!useMounted) return null;
  return (
    <div>
      <button className="hover:text-orange-600" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} type="button">
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};
