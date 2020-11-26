import React from 'react';
import {
  SkillWrapper,
  SkillsHeader,
  SkillBody,
  Skill,
  Title,
} from './SkillsElements';

const Skills = () => (
  <SkillWrapper>
    <Title>Top Skills</Title>
    <SkillBody>
      <SkillsHeader />
      <Skill>Javascript</Skill>
      <Skill>Basic React</Skill>
      <Skill>CSS / SCSS</Skill>
      <Skill>Ansible / Automation</Skill>
      <Skill>Bash / Linux</Skill>
    </SkillBody>
  </SkillWrapper>
);
export default Skills;
