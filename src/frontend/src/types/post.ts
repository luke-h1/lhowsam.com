export interface Post {
  id: string;
  title: string;
  slug: string;
  intro: string;
  content: string;
  date: string;
  tags: Tag[];
  image: {
    url: string;
  };
}

export interface Tag {
  id: number;
  title: string;
  slug: string;
}
