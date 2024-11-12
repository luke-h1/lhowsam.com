import { parse } from 'date-fns';

export const parseDate = (date: string) => {
  return parse(date, 'dd/MM/yyyy', new Date());
};
