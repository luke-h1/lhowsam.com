export interface SkillItem {
  title: string;
  items: string[];
}

const skills: SkillItem[] = [
  {
    title: 'Frontend',
    items: [
      'HTML, CSS & SCSS',
      'Javascript',
      'Typescript',
      'React',
      'Next.js',
      'styled-components',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    title: 'Other',
    items: ['Git & Github', 'Docker', 'AWS', 'DigitalOcean'],
  },
  {
    title: 'Testing',
    items: ['Manual & automated testing'],
  },
];
export default skills;
