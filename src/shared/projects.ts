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
      "In this project I built a clone of Airbnb with Next.js for the frontend & GraphQL + Typescript for the api. While this project is not a 1 to 1 match of the actual Airbnb, I learnt a lot about technologies that I wasn't very comfortable with at the start of this project (uploading & deleting s3 images, more complex SQL queries etc.)",
    githubUrl: 'https://github.com/luke-h1/airbnb-clone',
    tech: [
      'Typescript',
      'Node',
      'GraphQL',
      'Redis',
      'PostgreSQL',
      'Next.js',
      'AWS S3',
      'Docker',
    ],
  },
  {
    id: 3,
    title: 'Automation',
    description:
      'I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure.In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images etc.)',
    githubUrl: 'https://github.com/luke-h1/Automation',
    tech: ['Ansible', 'Bash'],
  },
];
