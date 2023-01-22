/* eslint-disable react/no-unknown-property */
/* eslint-disable no-shadow */
import { isServer } from '@frontend/hooks/isServer';
import { Command, useCommandState } from 'cmdk';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import {
  Linkedin,
  Sun,
  Moon,
  Circle,
  GitHub,
  Monitor,
  Home,
  Edit,
  Copy,
} from 'react-feather';
import tinykeys from 'tinykeys';
import { toast } from '../Toast/Toast';
import './CommandMenu.css';

const themes = {
  system: 'System',
  dark: 'Dark',
  light: 'Light',
} as const;

// const links: { id: number; name: string; slug: string }[] = [
//   { id: 1, name: 'Home', slug: '/' },
//   { id: 2, name: 'About', slug: '/about' },
//   { id: 3, name: 'Blog', slug: '/blog' },
//   { id: 4, name: 'Projects', slug: '/projects' },
// ];

type Theme = keyof typeof themes;

interface ItemProps {
  onSelect?: (value: string) => void;
  value: string;
  children: ReactNode;
}

const CommandItem = ({ children, value, onSelect }: ItemProps) => {
  const currentValue = useCommandState(state => state.value);
  return (
    <Command.Item onSelect={onSelect} value={value}>
      <span className="content">{children}</span>
      {currentValue === value && (
        <motion.span
          layoutId="highlight"
          className="highlight"
          transition={{ duration: 0.2 }}
        />
      )}
    </Command.Item>
  );
};

interface MenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CommandMenu = ({ open, setOpen }: MenuProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  // Toggle menu when command k is pressed
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      '$mod+KeyK': () => setOpen(open => !open),
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetTheme = (theme: string) => {
    setTheme(theme);
    setOpen(false);
    toast({
      content: `Theme set to ${themes[theme as Theme]}`,
    });
  };

  const handleCopyUrl = () => {
    if (!isServer && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setOpen(false);
      toast({
        content: 'Copied URL to clipboard',
      });
    }
  };

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu">
      <div cmdk-header="">
        <Command.Input placeholder="Type a command or search..." />
        <button
          aria-label="Close Command Menu"
          cmdk-header-esc=""
          onClick={() => setOpen(false)}
          tabIndex={-1}
          type="button"
        >
          ESC
        </button>
      </div>
      <Command.List>
        <Command.Empty>No results found</Command.Empty>
        <Command.Group heading="Navigation">
          <CommandItem
            onSelect={() => {
              router.push('/');
              setOpen(false);
            }}
            value="home"
          >
            <Home />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => router.push('/about')} value="about">
            <Circle />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => router.push('/blog')} value="blog">
            <Edit />
            <span>Blog</span>
          </CommandItem>
          <CommandItem
            onSelect={() => router.push('/projects')}
            value="projects"
          >
            <Monitor />
            <span>Projects</span>
          </CommandItem>
        </Command.Group>
        <Command.Group heading="Contact">
          <CommandItem
            onSelect={() =>
              window.open('https://www.linkedin.com/in/lukehowsam')
            }
            value="Linkedin"
          >
            <Linkedin />
            <span>Linkedin</span>
          </CommandItem>
          <CommandItem
            onSelect={() => window.open('https://github.com/luke-h1')}
            value="Github"
          >
            <GitHub />
            <span>Github</span>
          </CommandItem>
        </Command.Group>
        <Command.Group heading="Appearance">
          <CommandItem onSelect={() => handleSetTheme('system')} value="system">
            <Monitor />
            <span>System</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSetTheme('dark')} value="dark">
            <Moon />
            <span>Dark</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSetTheme('light')} value="light">
            <Sun />
            <span>Light</span>
          </CommandItem>
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
