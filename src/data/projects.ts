export interface Project {
  id: number;
  title: string;
  intro: string;
  description: string;
  tech: string[];
  siteUrl?: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'My Website',
    intro: 'My website and blog. Built with Next.js, Typescript & scss',
    description:
      "I use this project as a training ground for myself and often find myself in the deep end of learning a new framework or trying a new technology (This has helped me get comfortable with React & Next for example). I like working on this site and can't wait to continue to improve it with the latest technologies available",
    tech: ['Next.js', 'Typescript', 'tailwindcss', 'Cypress'],
    siteUrl: 'https://lhowsam.com',
    githubUrl: 'https://github.com/luke-h1/lhowsam.com',
  },
  {
    id: 2,
    title: 'tmtodos.me - full stack todo app',
    intro: 'A fullstack todo app. Built with React, Node & GraphQL',
    description:
      "tmtodos is a full stack todo app.This was the first fullstack app I created.  This project was an eye opener on which technologies I most like working with (building full stack applications is really satisifying) and the importance of picking the correct tech-stack to start a project with. While simple in the functionality it exposes to a user, I learnt a lot about technologies that I wasn't very comfortable with at the start of this project (uploading & deleting s3 images, more complex SQL queries etc.)",
    tech: [
      'Typescript',
      'Node',
      'GraphQL',
      'Redis',
      'PostgreSQL',
      'Next.js',
      'AWS',
      'S3',
      'Docker',
    ],
    siteUrl: 'https://tmtodos.me',
    githubUrl: 'https://github.com/luke-h1/tmtodos.me',
  },
  {
    id: 3,
    title: 'Automation',
    intro:
      'Useful scripts and ansible playbooks I use to automate my deployment & development environments',
    description:
      'I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure.In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images etc.)',
    tech: ['Ansible', 'Bash'],
    githubUrl: 'https://github.com/luke-h1/Automation',
  },
];
