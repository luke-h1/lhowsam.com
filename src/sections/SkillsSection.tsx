import React from 'react';
import Skills from '@src/data/Skills';
import { SkillItem, SkillList, SkillsContainer } from '@src/styles/skills';
import { Heading } from '@chakra-ui/react';

const SkillsSection = () => {
  return (
    <section id="skills">
      <Heading mb={10}>Skills</Heading>
      <SkillsContainer>
        {Skills
          && Skills.map((skill) => (
            <SkillItem key={skill.title}>
              <header>
                <h1>{skill.title}</h1>
              </header>
              <SkillList>
                {skill.items.map((item) => (
                  <li key={item}>
                    <p>{item}</p>
                  </li>
                ))}
              </SkillList>
            </SkillItem>
          ))}
      </SkillsContainer>
    </section>
  );
};

export default SkillsSection;
