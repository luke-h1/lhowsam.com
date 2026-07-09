import { Command } from 'cmdk';
import {
  AtSign,
  Boxes,
  ChartBar,
  Circle,
  Code,
  Command as CommandKeyIcon,
  Copy,
  FileText,
  Github,
  Home,
  Linkedin,
  Package,
  SquarePen,
  Triangle,
  Twitter,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import type { CommandMenuGroup, CommandMenuItem } from '../../util/commandMenu';
import { navigateToInternalUrl } from '../../util/navigateToInternalUrl';
import './CommandMenu.css';

interface Props {
  groups: CommandMenuGroup<CommandMenuItem>[];
}

const groupTestIds: Record<string, string> = {
  Navigation: 'CommandMenu-navigation',
  Social: 'CommandMenu-social',
  Blog: 'CommandMenu-blog',
  Talks: 'CommandMenu-talks',
  Projects: 'CommandMenu-projects',
  Experience: 'CommandMenu-experience',
  Commands: 'CommandMenu-commands',
};

const listIconProps = {
  size: 24,
  strokeWidth: 2,
  'aria-hidden': true as const,
};

function commandMenuIconFor(
  item: CommandMenuItem,
  groupHeading: string,
): React.ReactNode {
  if (groupHeading === 'Commands' && item.type === 'copy-url') {
    return <Copy {...listIconProps} />;
  }

  if (groupHeading === 'Social') {
    const key = item.label.toLowerCase();
    if (key.includes('github')) {
      return <Github {...listIconProps} />;
    }
    if (key.includes('twitter') || key.includes('x')) {
      return <Twitter {...listIconProps} />;
    }
    if (key.includes('linkedin')) {
      return <Linkedin {...listIconProps} />;
    }
  }

  if (groupHeading === 'Navigation' && item.href) {
    if (item.href === '/' || item.href === '') {
      return <Home {...listIconProps} />;
    }
    if (item.href.startsWith('/about')) {
      return <AtSign {...listIconProps} />;
    }
    if (item.href.startsWith('/blog')) {
      return <SquarePen {...listIconProps} />;
    }
    if (item.href.startsWith('/talks')) {
      return <Triangle {...listIconProps} />;
    }
    if (item.href.startsWith('/projects')) {
      return <Package {...listIconProps} />;
    }
    if (item.href.startsWith('/work')) {
      return <Code {...listIconProps} />;
    }
  }

  if (groupHeading === 'Blog') {
    return <FileText {...listIconProps} />;
  }

  if (groupHeading === 'Talks') {
    return <Triangle {...listIconProps} />;
  }

  if (groupHeading === 'Projects') {
    return <Boxes {...listIconProps} />;
  }

  if (groupHeading === 'Experience') {
    return <ChartBar {...listIconProps} />;
  }

  return <Circle {...listIconProps} />;
}

function CommandMenuRow({
  item,
  groupHeading,
  value,
  keywords,
  onSelect,
}: {
  item: CommandMenuItem;
  groupHeading: string;
  value: string;
  keywords: string[];
  onSelect: () => void;
}) {
  return (
    <Command.Item
      value={value}
      keywords={keywords}
      onSelect={onSelect}
      data-testid={`command-menu-item-${value}`}
    >
      <span className="content">
        {commandMenuIconFor(item, groupHeading)}
        <span>{item.label}</span>
      </span>
      <span className="highlight" aria-hidden="true" />
    </Command.Item>
  );
}

const CommandMenu = ({ groups }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(currentOpen => !currentOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    // cmdk's sizer div breaks aria-required-children
    const frame = requestAnimationFrame(() => {
      document
        .querySelector('[cmdk-list-sizer]')
        ?.setAttribute('role', 'presentation');
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  const currentOrigin =
    typeof window !== 'undefined'
      ? window.location.origin
      : import.meta.env.PUBLIC_BASE_URL;

  const handleSelect = (item: CommandMenuItem) => {
    if (item.type === 'copy-url') {
      const { pathname, search, hash } = document.location;
      const shareUrl = new URL(`${pathname}${search}${hash}`, currentOrigin);

      navigator.clipboard.writeText(shareUrl.toString()).catch(() => undefined);
      setOpen(false);
      return;
    }

    if (!item.href) {
      return;
    }

    setOpen(false);

    if (item.type === 'external-link') {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }

    navigateToInternalUrl(item.href, currentOrigin);
  };

  return (
    <div className="command-menu">
      <button
        type="button"
        className="command-menu__toggle"
        onClick={() => setOpen(true)}
        data-testid="cmdk-icon"
        aria-label="Open command menu"
      >
        <span className="command-menu__toggle-highlight" aria-hidden="true" />
        <span className="command-menu__toggle-icon" aria-hidden="true">
          <CommandKeyIcon size={16} strokeWidth={2} aria-hidden />
        </span>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        aria-label="Global Command Menu"
        data-testid="command-menu-root"
      >
        <div
          className="command-menu__header"
          {...({
            'cmdk-header': '',
          } as Record<string, string>)}
        >
          <Command.Input
            placeholder="Type a command or search…"
            data-testid="command-menu-input"
          />
          <button
            aria-label="Close command menu"
            type="button"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            {...({
              'cmdk-header-esc': '',
            } as Record<string, string>)}
          >
            ESC
          </button>
        </div>
        <div data-testid="command-menu-listbox">
          <Command.List role="listbox">
            <Command.Empty>No results found.</Command.Empty>

            {groups.map(group => (
              <Command.Group
                key={group.heading}
                heading={group.heading}
                data-testid={groupTestIds[group.heading]}
              >
                {group.items.map(item => (
                  <CommandMenuRow
                    key={item.id}
                    item={item}
                    groupHeading={group.heading}
                    value={item.id}
                    keywords={[
                      item.label,
                      item.searchText,
                      item.section ?? '',
                      group.heading,
                    ]}
                    onSelect={() => {
                      handleSelect(item);
                    }}
                  />
                ))}
              </Command.Group>
            ))}
          </Command.List>
        </div>
      </Command.Dialog>
    </div>
  );
};

export const flattenCommandMenuItems = (
  groups: CommandMenuGroup<CommandMenuItem>[],
) =>
  groups.flatMap(group =>
    group.items.map(item => ({ ...item, heading: group.heading })),
  );

export const getCommandMenuTestIds = () => groupTestIds;

export default CommandMenu;
