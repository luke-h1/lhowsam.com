export interface Project {
  id: string;
  title: string;
  intro: string;
  content: string;
  slug: string;
  tech: string[];
  siteUrl?: string;
  githubUrl: string;
  source: { compiledSource: string };
}
