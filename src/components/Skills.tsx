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
} from 'react-icons/si';
import SkillItem from './SkillItem';
import styles from './skills.module.scss';

const Skills = () => {
  return (
    <ul className={styles.skillGrid} id="skills-grid">
      <SkillItem icon={SiJavascript} text="Javascript" />
      <SkillItem icon={SiTypescript} text="TypeScript" />
      <SkillItem icon={SiReact} text="React.js" />
      <SkillItem icon={SiNextDotJs} text="Next.js" />
      <SkillItem icon={SiNodeDotJs} text="Node.js" />
      <SkillItem icon={SiGraphql} text="GraphQL" />
      <SkillItem icon={SiPython} text="Python" />
      <SkillItem icon={SiDjango} text="Django" />
      <SkillItem icon={SiCss3} text="CSS, SCSS" />
      <SkillItem icon={SiStyledComponents} text="styled-components" />
      <SkillItem icon={BiTestTube} text="Automated & manual testing" />
      <SkillItem icon={SiDocker} text="Docker" />
      <SkillItem icon={SiGit} text="Git, Github, Gitlab" />
      <SkillItem icon={SiAtlassian} text="Jira, Trello, confluence etc." />
    </ul>
  );
};
export default Skills;
