import { describe, expect, test } from 'vitest';

import { formatDateRange } from '../dateRange';

describe('formatDateRange', () => {
  test('formats a closed date range as day/month/year', () => {
    expect(formatDateRange('2023-08-14', '2024-11-14')).toBe(
      '14/08/2023 - 14/11/2024',
    );
  });

  test('formats an open date range with Present as the end date', () => {
    expect(formatDateRange('2025-01-06', null)).toBe('06/01/2025 - Present');
  });
});
