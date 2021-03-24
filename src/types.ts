export interface BlogPost {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags: string[];
  readingTime: { text: string; minutes: number; time: number; word: number };
}

export interface ProjectPost {
  summary: string;
  github: string;
  slug: string;
  tags: string[];
  title: string;
  site?: string;
}
