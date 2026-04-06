export function getReadingTime(
  content?: string,
  wordsPerMinute: number = 200,
): number {
  if (!content) {
    return 0;
  }
  const wordCount = content.trim().split(/\s+/g).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
