export interface YearGroup<T> {
  year: number;
  items: T[];
}

export function groupByYear<T>(
  items: T[],
  getDate: (item: T) => Date,
): YearGroup<T>[] {
  const groups = new Map<number, T[]>();

  items.forEach(item => {
    const year = getDate(item).getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), item]);
  });

  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, groupItems]) => ({ year, items: groupItems }));
}
