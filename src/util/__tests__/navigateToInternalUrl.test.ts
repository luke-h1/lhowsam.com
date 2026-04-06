import { describe, expect, test, vi } from 'vitest';
import {
  navigateToInternalUrl,
  resolveInternalUrl,
} from '../navigateToInternalUrl';

describe('resolveInternalUrl', () => {
  test('builds an absolute URL from a relative href', () => {
    expect(resolveInternalUrl('/about', 'http://localhost:3000')).toBe(
      'http://localhost:3000/about',
    );
  });

  test('preserves hashes for anchored routes', () => {
    expect(
      resolveInternalUrl(
        '/about#hive-it-software-engineer-2022-05-01',
        'http://localhost:3000',
      ),
    ).toBe('http://localhost:3000/about#hive-it-software-engineer-2022-05-01');
  });
});

describe('navigateToInternalUrl', () => {
  test('passes the resolved URL to the provided navigation function', () => {
    const navigate = vi.fn();

    navigateToInternalUrl('/projects/foam', 'http://localhost:3000', navigate);

    expect(navigate).toHaveBeenCalledWith(
      'http://localhost:3000/projects/foam',
    );
  });
});
