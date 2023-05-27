/* eslint-disable no-shadow */
/* eslint-disable react/no-unknown-property */
import { Command, useCommandState } from 'cmdk';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import {
  Linkedin,
  GitHub,
  Sun,
  Moon,
  Monitor,
  Home,
  Edit,
  Copy,
  Coffee,
  Activity,
} from 'react-feather';
import tinykeys from 'tinykeys';
import { toast } from '../Toast/Toast';
import './CommandMenu.css';

const themes = {
  system: 'System',
  dark: 'Dark',
  light: 'Light',
};

type Theme = keyof typeof themes;

const CommandItem = ({
  onSelect,
  value,
  children,
}: {
  onSelect?: (value: string) => void;
  value: string;
  children: ReactNode;
}) => {
  const currentValue = useCommandState(state => state.value);
  return (
    <Command.Item onSelect={onSelect} value={value}>
      <span className="content">{children}</span>
      {currentValue === value ? <span className="highlight" /> : null}
    </Command.Item>
  );
};

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      '$mod+KeyK': () => {
        setOpen(open => !open);
      },
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetTheme = (val: string) => {
    setTheme(val);
    setOpen(false);
    toast({
      id: 'theme',
      content: `${themes[val as Theme]} theme enabled`,
    });
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
    toast({ content: 'Copied URL to clipboard' });
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
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
            <Coffee />
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
            <Activity />
            <span>Projects</span>
          </CommandItem>

          {/* <CommandItem
            onSelect={() => {
              router.push('/uses');
              setOpen(false);
            }}
            value="uses"
          >
            <Repeat />
            <span>uses</span>
          </CommandItem> */}
        </Command.Group>

        <Command.Group heading="Connect">
          <CommandItem
            onSelect={() => window.open('https://github.com/luke-h1', '_blank')}
            value="github"
          >
            <GitHub />
            <span>Github</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              window.open('https://www.linkedin.com/in/lukehowsam/', '_blank')
            }
            value="linkedin"
          >
            <Linkedin />
            <span>LinkedIn</span>
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
