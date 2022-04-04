export interface Post {
  id: string;
  title: string;
  slug: string;
  intro: string;
  content: string;
  date: string;
  tags: string[];
  image: {
    url: string;
  };
}
