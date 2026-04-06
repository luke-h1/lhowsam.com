export type CommandMenuActionType =
  | 'internal-link'
  | 'external-link'
  | 'copy-url';

export interface CommandMenuItem {
  id: string;
  label: string;
  searchText: string;
  type: CommandMenuActionType;
  href?: string;
  section?: string;
}

export interface CommandMenuGroup<
  TItem extends Pick<CommandMenuItem, 'label' | 'searchText'> = CommandMenuItem,
> {
  heading: string;
  items: TItem[];
}

export const filterCommandGroups = <
  TItem extends Pick<CommandMenuItem, 'label' | 'searchText'>,
>(
  groups: CommandMenuGroup<TItem>[],
  query: string,
): CommandMenuGroup<TItem>[] => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return groups;
  }

  return groups
    .map(group => ({
      ...group,
      items: group.items.filter(item =>
        item.searchText.toLowerCase().includes(normalizedQuery),
      ),
    }))
    .filter(group => group.items.length > 0);
};
