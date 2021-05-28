export interface BlogPost {
  title: string;
  summary?: string;
  slug: string;
  date: string;
  tags: string[];
  readingTime: { text: string; minutes: number; time: number; word: number };
  ogImage?: string;
  type: string;
  github?: string;
  site?: string;
}

export interface ProjectPost {
  summary: string;
  slug: string;
  tags: string[];
  title: string;
  date?: string;
  type: string;
  ogImage?: string;
  github?: string;
  site?: string;
}
