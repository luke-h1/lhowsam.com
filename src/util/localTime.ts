export const LOCAL_TIME_ZONE = 'Europe/London';

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: LOCAL_TIME_ZONE,
});

export function formatLocalTime(date: Date): string {
  return formatter.format(date);
}
