export interface Job {
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'hybrid' | 'remote' | 'onsite';
  startDate: string;
  endDate?: string;
}
