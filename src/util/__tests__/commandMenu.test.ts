import { describe, expect, test } from 'vitest';
import { filterCommandGroups } from '../commandMenu';

const groups = [
  {
    heading: 'Navigation',
    items: [
      { label: 'Home', searchText: 'home' },
      { label: 'About', searchText: 'about' },
    ],
  },
  {
    heading: 'Commands',
    items: [{ label: 'Copy current URL', searchText: 'copy current url' }],
  },
];

describe('filterCommandGroups', () => {
  test('returns all groups when query is empty', () => {
    expect(filterCommandGroups(groups, '')).toEqual(groups);
  });

  test('keeps only matching items and non-empty groups', () => {
    expect(filterCommandGroups(groups, 'home')).toEqual([
      {
        heading: 'Navigation',
        items: [{ label: 'Home', searchText: 'home' }],
      },
    ]);
  });

  test('matches case-insensitively and trims whitespace', () => {
    expect(filterCommandGroups(groups, '  COPY  ')).toEqual([
      {
        heading: 'Commands',
        items: [{ label: 'Copy current URL', searchText: 'copy current url' }],
      },
    ]);
  });

  test('returns no groups when nothing matches', () => {
    expect(filterCommandGroups(groups, 'missing')).toEqual([]);
  });
});
