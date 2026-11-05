import { describe, expect, test } from 'vitest';
import { groupByYear } from '../groupByYear';

const post = (title: string, date: string) => ({
  title,
  date: new Date(date),
});

describe('groupByYear', () => {
  test('groups items by year with the newest year first', () => {
    const items = [
      post('b', '2024-03-01'),
      post('a', '2026-01-10'),
      post('c', '2024-11-20'),
    ];

    expect(groupByYear(items, item => item.date)).toEqual([
      { year: 2026, items: [items[1]] },
      { year: 2024, items: [items[0], items[2]] },
    ]);
  });

  test('keeps the input order inside each year', () => {
    const items = [post('first', '2025-06-01'), post('second', '2025-01-01')];

    expect(groupByYear(items, item => item.date)[0].items).toEqual(items);
  });

  test('returns an empty array for no items', () => {
    expect(groupByYear([], (item: { date: Date }) => item.date)).toEqual([]);
  });
});
