import React from 'react';
import {
  SkillWrapper,
  SkillsHeader,
  SkillBody,
  SkillTitleH3,
  Skill,
  Title,
} from './SkillsElements';

const Skills = () => {
  return (
    <SkillWrapper>
      <Title>Top Skills</Title>
      <SkillBody>
        <SkillsHeader></SkillsHeader>
        <Skill>Javascript</Skill>
        <Skill>Basic React</Skill>
        <Skill>CSS / SCSS</Skill>
        <Skill>Ansible / Automation</Skill>
        <Skill>Bash / Linux</Skill>
      </SkillBody>
    </SkillWrapper>
  );
};
export default Skills;
