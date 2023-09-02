/* eslint-disable react/no-unknown-property */
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
} from 'react-feather';
import { tinykeys } from 'tinykeys';
import './CommandMenu.css';
import { toast } from '../Toast/Toast';

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

interface CommandMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CommandMenu = ({ open, setOpen }: CommandMenuProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();

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
    toast({
      id: 'toast-theme',
      content: `Theme set to ${themes[value as Theme]}`,
    });
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
    toast({
      id: 'toast-copy-url',
      content: 'URL copied to clipboard',
    });
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
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

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
          <CommandItem
            onSelect={() => {
              router.push('/about');
              setOpen(false);
            }}
            value="about"
          >
            <AtSign />
            <span>About</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/blog');
              setOpen(false);
            }}
            value="blog"
          >
            <Edit />
            <span>Blog</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push('/projects');
              setOpen(false);
            }}
            value="projects"
          >
            <Code />
            <span>Projects</span>
          </CommandItem>
        </Command.Group>
        <Command.Group heading="Social">
          <CommandItem
            value="twitter"
            onSelect={() =>
              window.open('https://twitter.com/LukeH_1999', '_blank')
            }
          >
            <Twitter /> <span>Twitter</span>
          </CommandItem>
          <CommandItem
            value="github"
            onSelect={() => window.open('http://github.com/luke-h1', '_blank')}
          >
            <GitHub /> <span>GitHub</span>
          </CommandItem>
          <CommandItem
            value="linkedin"
            onSelect={() =>
              window.open('https://www.linkedin.com/in/lukehowsam', '_blank')
            }
          >
            <Linkedin /> <span>LinkedIn</span>
          </CommandItem>
        </Command.Group>
        <Command.Group heading="Appearance">
          <CommandItem onSelect={handleSetTheme} value="system">
            <Monitor /> <span>System</span>
          </CommandItem>
          <CommandItem onSelect={handleSetTheme} value="light">
            <Sun /> <span>Light</span>
          </CommandItem>
          <CommandItem onSelect={handleSetTheme} value="dark">
            <Moon /> <span>Dark</span>
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
