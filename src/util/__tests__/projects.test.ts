import { describe, expect, test } from 'vitest';
import { sortProjects } from '../projects';

const project = (title: string, order?: number) => ({ data: { title, order } });

describe('sortProjects', () => {
  test('sorts by order, then title, with unordered projects last', () => {
    const sorted = sortProjects([
      project('Zed'),
      project('Foam', 1),
      project('Config', 1),
      project('Tightlog', 0),
    ]);

    expect(sorted.map(p => p.data.title)).toEqual([
      'Tightlog',
      'Config',
      'Foam',
      'Zed',
    ]);
  });

  test('does not mutate the input', () => {
    const input = [project('B', 1), project('A', 0)];
    sortProjects(input);
    expect(input.map(p => p.data.title)).toEqual(['B', 'A']);
  });
});
