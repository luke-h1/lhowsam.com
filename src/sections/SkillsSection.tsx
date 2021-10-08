import React from 'react';
import Skills from '@src/data/Skills';
import styles from '@src/styles/skills.module.scss';

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="section__title">Skills</h1>
      <div className={styles.skillsContainer}>
        {Skills
          && Skills.map((skill) => (
            <div key={skill.title} className={styles.SkillItem}>
              <header>
                <h1>{skill.title}</h1>
              </header>
              <ul className={styles.skillsItem}>
                {skill.items.map((item) => (
                  <li key={item}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SkillsSection;
