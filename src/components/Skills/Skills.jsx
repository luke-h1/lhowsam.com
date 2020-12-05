import React from 'react';
import { SkillData } from '../../data/SkillData';

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
      {SkillData.map((skill) => (
        <Skill key={skill.id}>{skill.title}</Skill>
      ))}
    </SkillBody>
  </SkillWrapper>
);
export default Skills;
