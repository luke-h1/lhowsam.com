import { SkillItem } from '@src/types/SkillItem';

const Skills: SkillItem[] = [
  {
    title: 'Frontend',
    items: [
      'HTML, CSS & SCSS',
      'Javascript',
      'Typescript',
      'React',
      'Next.js',
      'Lerna / Yarn workspaces',
      'styled-components',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    title: 'Other',
    items: ['Git & Github', 'Docker', 'AWS', 'DigitalOcean'],
  },
  {
    title: 'Testing',
    items: ['Manual / automated testing', 'Selenium', 'k6', 'Cypress',],
  },
];
export default Skills;
