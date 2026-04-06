import { format, parseISO } from 'date-fns';

export function formatDateRange(
  from: string,
  to: string | null,
  dateFormat: string = 'dd/MM/yyyy',
): string {
  const formattedFrom = format(parseISO(from), dateFormat);
  const formattedTo = to ? format(parseISO(to), dateFormat) : 'Present';

  return `${formattedFrom} - ${formattedTo}`;
}
