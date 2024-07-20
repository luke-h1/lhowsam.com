/* eslint-disable react/no-unknown-property */
import { useAppDispatch } from '@frontend/store/hooks';
import { setToast } from '@frontend/store/reducers/toastReducer';
import { Command, useCommandState } from 'cmdk';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import {
  Linkedin,
  GitHub,
  Sun,
  Moon,
  Monitor,
  Home,
  Edit,
  Code,
  Copy,
  AtSign,
  Twitter,
  Triangle,
} from 'react-feather';
import { tinykeys } from 'tinykeys';
import './CommandMenu.css';

const themes = {
  system: 'System',
  dark: 'Dark',
  light: 'Light',
} as const;

type Theme = keyof typeof themes;

interface CommandItemProps {
  onSelect?: (value: string) => void;
  value: string;
  children: ReactNode;
}

const CommandItem = ({ children, value, onSelect }: CommandItemProps) => {
  const currentValue = useCommandState(state => state.value);

  return (
    <Command.Item onSelect={onSelect} value={value}>
      <span className="content">{children}</span>
      {currentValue === value && (
        <LazyMotion features={domAnimation}>
          <motion.span
            layoutId="highlight"
            className="highlight"
            transition={{
              duration: 0.2,
            }}
          />
        </LazyMotion>
      )}
    </Command.Item>
  );
};

interface NavigationItem {
  id: number;
  href: string;
  icon: ReactNode;
  text: string;
}

const navigationLinks: NavigationItem[] = [
  {
    id: 1,
    href: '/',
    text: 'Home',
    icon: <Home />,
  },
  {
    id: 2,
    href: '/about',
    text: 'About',
    icon: <AtSign />,
  },
  {
    id: 3,
    href: '/blog',
    text: 'Blog',
    icon: <Edit />,
  },
  {
    id: 4,
    href: '/projects',
    text: 'Projects',
    icon: <Code />,
  },
  {
    id: 5,
    href: '/talks',
    text: 'Talks',
    icon: <Triangle />,
  },
];

interface SocialLink extends Omit<NavigationItem, 'href'> {
  onSelect?: () => void;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    text: 'Twitter',
    icon: <Twitter />,
    onSelect: () => window.open('https://twitter.com/LukeH_1999', '_blank'),
  },
  {
    id: 2,
    text: 'GitHub',
    icon: <GitHub />,
    onSelect: () => window.open('https://github.com/luke-h1', '_blank'),
  },
  {
    id: 3,
    text: 'LinkedIn',
    icon: <Linkedin />,
    onSelect: () =>
      window.open('https://www.linkedin.com/in/lukehowsam', '_blank'),
  },
];

interface ThemeItem {
  id: number;
  text: string;
  value: string;
  icon: ReactNode;
  onSelect?: (value: string) => void;
}

const themeItems: ThemeItem[] = [
  {
    id: 1,
    text: 'System',
    value: 'system',
    icon: <Monitor />,
  },
  {
    id: 2,
    text: 'Light',
    value: 'light',
    icon: <Sun />,
  },
  {
    id: 3,
    text: 'Dark',
    value: 'dark',
    icon: <Moon />,
  },
];

const renderThemeItem = (item: ThemeItem) => (
  <CommandItem key={item.id} onSelect={item.onSelect} value={item.value}>
    {item.icon}
    {item.text}
  </CommandItem>
);

export interface CommandMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CommandMenu = ({ open, setOpen }: CommandMenuProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  const dispatch = useAppDispatch();
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      '$mod+KeyK': () => {
        // eslint-disable-next-line no-shadow
        setOpen(open => !open);
      },
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetTheme = (value: string) => {
    setTheme(value);
    setOpen(false);
    dispatch(
      setToast({
        id: 'toast-theme',
        content: `Theme set to ${themes[value as Theme]}`,
      }),
    );
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
    dispatch(
      setToast({
        id: 'toast-copy-url',
        content: 'URL copied to clipboard',
      }),
    );
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      aria-label="Global Command Menu"
    >
      <div cmdk-header="">
        <Command.Input placeholder="Type a command or search..." />
        <button
          aria-label="Close command menu"
          cmdk-header-esc=""
          onClick={() => setOpen(false)}
          tabIndex={-1}
          type="button"
        >
          ESC
        </button>
      </div>
      <Command.List role="listbox">
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Navigation">
          {navigationLinks &&
            navigationLinks.map(link => (
              <CommandItem
                key={link.id}
                onSelect={() => {
                  router.push(link.href);
                  setOpen(false);
                }}
                value={link.text.toLowerCase()}
              >
                {link.icon}
                <span>{link.text}</span>
              </CommandItem>
            ))}
        </Command.Group>
        <Command.Group heading="Social">
          {socialLinks &&
            socialLinks.map(link => (
              <CommandItem
                key={link.id}
                onSelect={link.onSelect}
                value={link.text.toLowerCase()}
              >
                {link.icon}
                <span>{link.text}</span>
              </CommandItem>
            ))}
        </Command.Group>
        <Command.Group heading="Appearance">
          {themeItems &&
            themeItems.map(item =>
              renderThemeItem({
                ...item,
                onSelect: handleSetTheme,
              }),
            )}
        </Command.Group>
        <Command.Group heading="Commands">
          <CommandItem onSelect={handleCopyUrl} value="copy">
            <Copy />
            <span>Copy current URL</span>
          </CommandItem>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};
export default CommandMenu;
