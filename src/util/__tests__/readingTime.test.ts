import { describe, expect, test } from 'vitest';

import { getReadingTime } from '../readingTime';

describe('getReadingTime', () => {
  test('returns 0 when content is undefined', () => {
    expect(getReadingTime(undefined)).toEqual(0);
  });

  test('returns 0 when content is empty string', () => {
    expect(getReadingTime('')).toEqual(0);
  });

  test('counts words spltest on whitespace and rounds up minutes at default 200 wpm', () => {
    expect(getReadingTime('one')).toEqual(1);
    const twoHundred = Array.from({ length: 200 }, () => 'word').join(' ');
    expect(getReadingTime(twoHundred)).toEqual(1);
    const twoHundredOne = `${twoHundred} extra`;
    expect(getReadingTime(twoHundredOne)).toEqual(2);
  });

  test('normalizes runs of whitespace to single word boundaries', () => {
    expect(getReadingTime('hello   world')).toEqual(1);
  });

  test('respects custom wordsPerMinute', () => {
    const hundredWords = Array.from({ length: 100 }, () => 'w').join(' ');
    expect(getReadingTime(hundredWords, 50)).toEqual(2);
    expect(getReadingTime(hundredWords, 100)).toEqual(1);
  });
});
