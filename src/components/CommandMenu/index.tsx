/* eslint-disable react/no-unknown-property */

'use client';

import { useToast } from '@frontend/context/ToastContext';
import { Command, useCommandState } from 'cmdk';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
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
  BarChart,
} from 'react-feather';
import { AiFillProject } from 'react-icons/ai';
// @ts-expect-error no types for tinykeys
import { tinykeys } from 'tinykeys';
import './CommandMenu.css';
import Link from '../Link';
import VisuallyHidden from '../VisuallyHidden';
import * as styles from './CommandMenu.css';

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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
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

const ICON_SIZE = 20;

const navigationLinks: NavigationItem[] = [
  {
    id: 1,
    href: '/',
    text: 'Home',
    icon: <Home size={ICON_SIZE} />,
  },
  {
    id: 2,
    href: '/about',
    text: 'About',
    icon: <AtSign size={ICON_SIZE} />,
  },
  {
    id: 3,
    href: '/blog',
    text: 'Blog',
    icon: <Edit size={ICON_SIZE} />,
  },
  {
    id: 4,
    href: '/work',
    text: 'Work',
    icon: <Code size={ICON_SIZE} />,
  },
  {
    id: 5,
    href: '/projects',
    text: 'Projects',
    icon: <AiFillProject size={ICON_SIZE} />,
  },
  {
    id: 6,
    href: '/talks',
    text: 'Talks',
    icon: <Triangle size={ICON_SIZE} />,
  },
];

type SocialLink = NavigationItem;

const socialLinks: SocialLink[] = [
  {
    id: 1,
    text: 'Twitter',
    icon: <Twitter size={ICON_SIZE} />,
    href: 'https://twitter.com/LukeH_1999',
  },
  {
    id: 2,
    text: 'GitHub',
    icon: <GitHub size={ICON_SIZE} />,
    href: 'https://github.com/luke-h1',
  },
  {
    id: 3,
    text: 'LinkedIn',
    icon: <Linkedin size={ICON_SIZE} />,
    href: 'https://www.linkedin.com/in/lukehowsam',
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
    icon: <Monitor size={ICON_SIZE} />,
  },
  {
    id: 2,
    text: 'Light',
    value: 'light',
    icon: <Sun size={ICON_SIZE} />,
  },
  {
    id: 3,
    text: 'Dark',
    value: 'dark',
    icon: <Moon size={ICON_SIZE} />,
  },
];

const renderThemeItem = (item: ThemeItem) => (
  <CommandItem key={item.id} onSelect={item.onSelect} value={item.value}>
    {item.icon}
    {item.text}
  </CommandItem>
);

const CommandMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const id = 'CommandMenu';

  const { setTheme } = useTheme();
  const { setToast } = useToast();

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
  }, []);

  const handleSetTheme = (value: string) => {
    setTheme(value);
    setOpen(false);
    setToast({
      id: 'toast-theme',
      content: `Theme set to ${themes[value as Theme]}`,
    });
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
    setToast({
      id: 'toast-copy-url',
      content: 'URL copied to clipboard',
    });
  };

  return (
    <header className={styles.banner}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(true)}
        data-testid="cmdk-icon"
        type="button"
      >
        <VisuallyHidden>Open command menu</VisuallyHidden>
        <span className={styles.toggleHighlight} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      </button>
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

          <Command.Group
            heading="Navigation"
            aria-label="Navigation"
            data-testid={`${id}-navigation`}
          >
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
          <Command.Group
            heading="Social"
            aria-label="Social"
            data-testid={`${id}-social`}
          >
            {socialLinks &&
              socialLinks.map(link => (
                <CommandItem key={link.id} value={link.text.toLowerCase()}>
                  {link.icon}
                  <Link href={link.href}>
                    <span>{link.text}</span>
                  </Link>
                </CommandItem>
              ))}
          </Command.Group>
          <Command.Group
            heading="Appearance"
            aria-label="Apperance"
            data-testid={`${id}-apperance`}
          >
            {themeItems &&
              themeItems.map(item =>
                renderThemeItem({
                  ...item,
                  onSelect: handleSetTheme,
                }),
              )}
          </Command.Group>
          <Command.Group
            heading="Commands"
            aria-label="Commands"
            data-testid={`${id}-commands`}
          >
            <CommandItem onSelect={handleCopyUrl} value="copy">
              <Copy />
              <span>Copy current URL</span>
            </CommandItem>
            <CommandItem value="status">
              <BarChart />
              <Link href="https://status.lhowsam.com">
                <span>View status page</span>
              </Link>
            </CommandItem>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </header>
  );
};
export default CommandMenu;
