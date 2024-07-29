export interface Job {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'hybrid' | 'remote' | 'onsite';
  slug?: string;
  startDate: string;
  endDate?: string;
  tags?: string[];
}
