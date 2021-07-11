export const Projects: {
  id: number;
  title: string;
  description: string;
  siteUrl?: string;
  githubUrl: string;
  tech: string[];
}[] = [
  {
    id: 1,
    title: 'My website',
    description: 'My website / blog',
    siteUrl: 'https://lhowsam.com',
    githubUrl: 'https://github.com/luke-h1/lhowsam.com',
    tech: ['Next.js', 'Typescript', 'Tailwind-css'],
  },
  {
    id: 2,
    title: 'tmtodos.me - full stack todo app',
    description: 'A full stack todo app build with Typescript, Node',
    siteUrl: 'https://tmtodos.me',
    githubUrl: 'https://github.com/luke-h1/tmtodos.me',
    tech: [
      'Typescript',
      'Node',
      'GraphQL',
      'Redis',
      'PostgreSQL',
      'Next.js',
      'AWS',
      'Docker',
    ],
  },
  {
    id: 3,
    title: 'Automation',
    description:
      'Ansible playbooks + bash scripts I use to set up deployment & development environments',
    githubUrl: 'https://github.com/luke-h1/Automation',
    tech: ['Ansible', 'Bash'],
  },
];
