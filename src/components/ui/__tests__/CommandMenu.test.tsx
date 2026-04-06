import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import type {
  CommandMenuGroup,
  CommandMenuItem,
} from '../../../util/commandMenu';
import { navigateToInternalUrl } from '../../../util/navigateToInternalUrl';
import CommandMenu from '../CommandMenu';

vi.mock('../../../util/navigateToInternalUrl', () => ({
  navigateToInternalUrl: vi.fn(),
}));

const groups: CommandMenuGroup<CommandMenuItem>[] = [
  {
    heading: 'Navigation',
    items: [
      {
        id: 'nav-home',
        label: 'Home',
        searchText: 'home navigation',
        type: 'internal-link',
        href: '/',
      },
      {
        id: 'nav-about',
        label: 'About',
        searchText: 'about navigation',
        type: 'internal-link',
        href: '/about',
      },
      {
        id: 'nav-blog',
        label: 'Blog',
        searchText: 'blog navigation',
        type: 'internal-link',
        href: '/blog',
      },
      {
        id: 'nav-talks',
        label: 'Talks',
        searchText: 'talks navigation',
        type: 'internal-link',
        href: '/talks',
      },
      {
        id: 'nav-projects',
        label: 'Projects',
        searchText: 'projects navigation',
        type: 'internal-link',
        href: '/projects',
      },
    ],
  },
  {
    heading: 'Blog',
    items: [
      {
        id: 'blog-post',
        label: 'Forcing git merges',
        searchText: 'forcing git merges blog',
        type: 'internal-link',
        href: '/blog/forcing-git-merges/',
      },
    ],
  },
  {
    heading: 'Talks',
    items: [
      {
        id: 'talk-feature-flags',
        label: 'Feature flags at scale',
        searchText: 'feature flags at scale meetup talk',
        type: 'internal-link',
        href: '/talks/feature-flags-at-scale/',
      },
    ],
  },
  {
    heading: 'Projects',
    items: [
      {
        id: 'project-foam',
        label: 'Foam',
        searchText: 'foam project react native',
        type: 'internal-link',
        href: '/projects/foam/',
      },
    ],
  },
  {
    heading: 'Experience',
    items: [
      {
        id: 'experience-hive',
        label: 'Software Engineer · Hive IT',
        searchText: 'software engineer hive it sheffield',
        type: 'internal-link',
        href: '/about#hive-it-software-engineer-2022-05-01',
      },
    ],
  },
  {
    heading: 'Social',
    items: [
      {
        id: 'social-github',
        label: 'GitHub',
        searchText: 'github social external',
        type: 'external-link',
        href: 'https://github.com/luke-h1',
      },
    ],
  },
  {
    heading: 'Commands',
    items: [
      {
        id: 'command-copy',
        label: 'Copy current URL',
        searchText: 'copy current url clipboard',
        type: 'copy-url',
      },
    ],
  },
];

const mockOpen = vi.fn();
const writeText = vi.fn();
const baseUrl = 'http://localhost:3000';

const getVisibleByText = (text: string) =>
  screen.queryAllByText(text).find(element => !element.closest('[hidden]'));

const getVisibleByTestId = (testId: string) =>
  screen
    .getAllByTestId(testId)
    .find(element => !element.hasAttribute('hidden'));

const getRequiredVisibleByText = (text: string) => {
  const element = getVisibleByText(text);

  expect(element).toBeTruthy();
  return element as HTMLElement;
};

const getRequiredVisibleByTestId = (testId: string) => {
  const element = getVisibleByTestId(testId);

  expect(element).toBeTruthy();
  return element as HTMLElement;
};

describe('CommandMenu', () => {
  beforeEach(() => {
    writeText.mockReset();
    writeText.mockResolvedValue(undefined);
    mockOpen.mockReset();
    vi.mocked(navigateToInternalUrl).mockReset();

    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });

    Object.defineProperty(window, 'open', {
      configurable: true,
      value: mockOpen,
    });

    render(<CommandMenu groups={groups} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open command menu' }));
  });

  afterEach(() => {
    cleanup();
  });

  test('Search filters list of items correctly', async () => {
    const input = screen.getByPlaceholderText('Type a command or search...');
    fireEvent.change(input, { target: { value: 'foam' } });

    expect(screen.getByText('Foam')).toBeVisible();
    expect(getVisibleByText('Home')).toBeUndefined();
    expect(screen.getByText('Projects')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'random' } });
    expect(screen.getByText('No results found.')).toBeVisible();
  });

  test('renders navigation items correctly', async () => {
    const navigationItems = getRequiredVisibleByTestId(
      'CommandMenu-navigation',
    );

    expect(within(navigationItems).getByText('Home')).toBeInTheDocument();
    expect(within(navigationItems).getByText('About')).toBeInTheDocument();
    expect(within(navigationItems).getByText('Blog')).toBeInTheDocument();
    expect(within(navigationItems).getByText('Talks')).toBeInTheDocument();
    expect(within(navigationItems).getByText('Projects')).toBeInTheDocument();
  });

  test('renders searchable content items correctly', () => {
    expect(getVisibleByTestId('CommandMenu-blog')).toBeInTheDocument();
    expect(getVisibleByTestId('CommandMenu-talks')).toBeInTheDocument();
    expect(getVisibleByTestId('CommandMenu-projects')).toBeInTheDocument();
    expect(getVisibleByTestId('CommandMenu-experience')).toBeInTheDocument();

    expect(screen.getByText('Forcing git merges')).toBeInTheDocument();
    expect(screen.getByText('Feature flags at scale')).toBeInTheDocument();
    expect(screen.getByText('Foam')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer · Hive IT')).toBeInTheDocument();
  });

  test('renders social items correctly', () => {
    const socialItems = getRequiredVisibleByTestId('CommandMenu-social');

    expect(within(socialItems).getByText('GitHub')).toBeInTheDocument();
  });

  test('renders Commands items correctly', () => {
    const commandItems = getRequiredVisibleByTestId('CommandMenu-commands');

    expect(
      within(commandItems).getByText('Copy current URL'),
    ).toBeInTheDocument();
  });

  test.each([
    ['Home', '/'],
    ['About', '/about'],
    ['Blog', '/blog'],
    ['Talks', '/talks'],
    ['Projects', '/projects'],
    ['Forcing git merges', '/blog/forcing-git-merges/'],
    ['Feature flags at scale', '/talks/feature-flags-at-scale/'],
    ['Foam', '/projects/foam/'],
    [
      'Software Engineer · Hive IT',
      '/about#hive-it-software-engineer-2022-05-01',
    ],
  ])('navigates to internal links from %s', (label, href) => {
    fireEvent.click(getRequiredVisibleByText(label));

    expect(navigateToInternalUrl).toHaveBeenCalledWith(href, baseUrl);
    expect(mockOpen).not.toHaveBeenCalled();
  });

  test('opens external links in new tab', () => {
    fireEvent.click(getRequiredVisibleByText('GitHub'));

    expect(mockOpen).toHaveBeenCalledWith(
      'https://github.com/luke-h1',
      '_blank',
      'noopener,noreferrer',
    );
  });

  test('copies current URL command to clipboard', async () => {
    window.history.pushState({}, '', '/projects/foam/');

    fireEvent.click(getRequiredVisibleByText('Copy current URL'));

    expect(writeText).toHaveBeenCalledWith(
      new URL('/projects/foam/', baseUrl).toString(),
    );
  });
});
