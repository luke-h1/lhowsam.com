import Skills from '@src/data/Skills';
import styles from '@src/styles/skills.module.scss';
import React from 'react';

const SkillsSection = () => {
  return (
    <section>
      <h1 className="section__title">Skills</h1>

      <div className={styles.skillsContainer}>
        {Skills.map(skill => {
          return (
            <div
              key={skill.title}
              className={styles.skillsItem}
              data-testid="skill-item-title"
            >
              <header>
                <h1>{skill.title}</h1>
              </header>

              <ul
                className={styles.skillsItem}
                data-testid={`skill-item-${skill.title}`}
              >
                {skill.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default SkillsSection;
