export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: {
    url: string;
  };
  intro: string;
  content: string;
}
