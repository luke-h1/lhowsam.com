export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  image: {
    url: string;
  };
  intro: string;
  keywords: string | null;
  readingTime: number;
  source: { compiledSource: string };
}
