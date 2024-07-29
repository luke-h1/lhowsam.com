'use client';

import { BiTestTube } from 'react-icons/bi';
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiAtlassian,
  SiPython,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiReact,
  SiGraphql,
  SiDjango,
  SiCss3,
  SiStyledcomponents as SiStyledComponents,
  SiTypescript,
  SiPostgresql,
  SiNpm,
  SiCypress,
  SiJest,
  SiAmazonaws,
  SiMicrosoftazure,
  SiTerraform,
  SiPlaywright,
} from 'react-icons/si';
import SkillItem, { SkillItemProps } from '../SkillItem';
import styles from './Skills.module.scss';

export const skills: SkillItemProps[] = [
  {
    icon: SiJavascript,
    text: 'JavaScript',
  },
  {
    icon: SiTypescript,
    text: 'TypeScript',
  },
  {
    icon: SiReact,
    text: 'React.js',
  },
  {
    icon: SiCss3,
    text: 'CSS/SCSS/pre-processors etc.',
  },
  {
    icon: SiNextDotJs,
    text: 'Next.js',
  },
  {
    icon: SiNodeDotJs,
    text: 'Node.js',
  },
  {
    icon: SiGraphql,
    text: 'GraphQL',
  },
  {
    icon: SiTerraform,
    text: 'Terraform',
  },
  {
    icon: SiDocker,
    text: 'Docker',
  },
  {
    icon: SiAmazonaws,
    text: 'AWS',
  },
  {
    icon: SiMicrosoftazure,
    text: 'Azure',
  },
  {
    icon: SiPostgresql,
    text: 'MySQL, Postgres',
  },
  {
    icon: SiPython,
    text: 'Python',
  },
  {
    icon: SiDjango,
    text: 'Django',
  },
  {
    icon: SiStyledComponents,
    text: 'Styled component',
  },
  {
    icon: BiTestTube,
    text: 'Automated and manual testing',
  },
  {
    icon: SiGit,
    text: 'Git, GitHub, GitLab etc',
  },
  {
    icon: SiNpm,
    text: 'NPM, yarn, PNPM etc.',
  },
  {
    icon: SiCypress,
    text: 'Cypress',
  },
  {
    icon: SiPlaywright,
    text: 'Playwright',
  },
  {
    icon: SiJest,
    text: 'Jest',
  },
  {
    icon: SiAtlassian,
    text: 'Jira, Trello, confluence etc.',
  },
];

const Skills = () => {
  return (
    <ul className={styles.skillGrid} id="skills-grid">
      {skills &&
        skills.map((skill, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkillItem icon={skill.icon} text={skill.text} key={idx} />
        ))}
    </ul>
  );
};
export default Skills;
