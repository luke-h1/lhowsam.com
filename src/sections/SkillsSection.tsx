import React from 'react';
import Skills from '@src/data/Skills';
import { SkillItem, SkillList, SkillsContainer } from '@src/styles/skills';

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="section__title">Skills</h1>
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
