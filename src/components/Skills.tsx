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
  SiYarn,
  SiCypress,
  SiJest,
} from 'react-icons/si';
import SkillItem from './SkillItem';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <ul className={styles.skillGrid} id="skills-grid">
      <SkillItem icon={SiJavascript} text="Javascript" />
      <SkillItem icon={SiTypescript} text="TypeScript" />
      <SkillItem icon={SiReact} text="React.js" />
      <SkillItem icon={SiNextDotJs} text="Next.js" />
      <SkillItem icon={SiNodeDotJs} text="Node.js" />
      <SkillItem icon={SiGraphql} text="GraphQL" />
      <SkillItem icon={SiPostgresql} text="SQL" />
      <SkillItem icon={SiPython} text="Python" />
      <SkillItem icon={SiDjango} text="Django" />
      <SkillItem icon={SiCss3} text="CSS, SCSS" />
      <SkillItem icon={SiStyledComponents} text="styled-components" />
      <SkillItem icon={BiTestTube} text="Automated & manual testing" />
      <SkillItem icon={SiDocker} text="Docker" />
      <SkillItem icon={SiGit} text="Git, Github, Gitlab" />
      <SkillItem icon={SiAtlassian} text="Jira, Trello, confluence etc." />
      <SkillItem icon={SiNpm} text="npm" />
      <SkillItem icon={SiYarn} text="yarn" />
      <SkillItem icon={SiCypress} text="Cypress" />
      <SkillItem icon={SiJest} text="Jest" />
    </ul>
  );
};
export default Skills;
