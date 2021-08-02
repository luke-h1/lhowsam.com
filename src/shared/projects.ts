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
    title: 'My Website',
    description:
      "I use this project as a training ground for myself and often find myself in the deep end of learning a new framework or trying a new technology (This has helped me get comfortable with React & Next for example). I like working on this site and can't wait to continue to improve it with the latest technologies available",
    siteUrl: 'https://lhowsam.com',
    githubUrl: 'https://github.com/luke-h1/lhowsam.com',
    tech: ['Next.js', 'Typescript', 'Tailwind-css'],
  },
  {
    id: 2,
    title: 'Airbnb clone - full stack clone of Airbnb',
    description:
      'In this project I built a clone of Airbnb with Next.js for the frontend & Graphql + Typescript for the api. While this project is not a 1 to 1 match of the actual Airbnb, I learnt a lot from this project (uploading & deleting s3 images), more complex SQL queries etc.',
    githubUrl: 'https://github.com/luke-h1/airbnb-clone',
    tech: ['Next.js', 'GraphQL', 'S3'],
  },
  {
    id: 3,
    title: 'tmtodos.me - full stack todo app',
    description:
      'This project was an eye opener on which technologies I most like working with (building full stack applications is really satisifying) and the importance of picking the correct tech-stack to start a project with. Initially the tech stack I chose to start this project was simply not suitable (i.e. Redux was overkill for this project).',
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
    id: 4,
    title: 'Automation',
    description:
      'I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure.In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images etc.)',
    githubUrl: 'https://github.com/luke-h1/Automation',
    tech: ['Ansible', 'Bash'],
  },
];
