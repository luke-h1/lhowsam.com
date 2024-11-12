import { parseDate } from '../date';

describe('date', () => {
  describe('parseDate', () => {
    test('should parse a date string in DD/MM/YYYY format correctly', () => {
      const date = parseDate('14/08/2023');
      expect(date).toEqual(new Date(2023, 7, 14));
    });

    test('should handle invalid date strings', () => {
      const date = parseDate('invalid-date');
      expect(date.toString()).toBe('Invalid Date');
    });
  });
});
