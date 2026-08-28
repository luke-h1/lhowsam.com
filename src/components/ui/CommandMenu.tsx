import { Command, defaultFilter } from 'cmdk';
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

// lucide keeps a 24-unit viewBox whatever `size` is, so the stroke is scaled
// by size/24 on render. 2.25 lands an effective 1.5px next to the 14px/400
// row text; matching optical weight is what stops icons reading as hairlines.
/**
 * cmdk matches subsequences, so "spotify" still scores "Forcing git merges":
 * those letters all appear in order somewhere in the post's intro. A native
 * menu shows nothing rather than a list of near-misses, so weak matches are
 * dropped instead of being ranked below the real ones.
 *
 * Measured against the real menu corpus, scores are strongly bimodal: genuine
 * matches land at 0.89 and above, subsequence noise peaks at 0.72. 0.8 sits in
 * that gap, and every prefix of a real query ("f", "fo", "foa", "foam") stays
 * above it, so results narrow as you type instead of vanishing.
 */
export const MIN_MATCH_SCORE = 0.8;

export const commandMenuFilter = (
  value: string,
  search: string,
  keywords?: string[],
) => {
  const score = defaultFilter?.(value, search, keywords) ?? 0;
  return score < MIN_MATCH_SCORE ? 0 : score;
};

const listIconProps = {
  size: 16,
  strokeWidth: 2.25,
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
        onPointerDown={event => {
          // Native menus open on press. Keep the pointer out of the dialog's
          // dismiss-on-outside-press check by claiming the event here.
          if (event.button !== 0) return;
          event.preventDefault();
          setOpen(true);
        }}
        onClick={event => {
          // Pointer input already opened it above; this covers keyboard
          // activation, where click fires without a preceding pointerdown.
          if (event.detail === 0) setOpen(true);
        }}
        data-testid="cmdk-icon"
        aria-label="Open command menu"
      >
        <span className="command-menu__toggle-highlight" aria-hidden="true" />
        <span className="command-menu__toggle-icon" aria-hidden="true">
          <CommandKeyIcon size={16} strokeWidth={2} aria-hidden />
        </span>
      </button>

      <Command.Dialog
        filter={commandMenuFilter}
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
