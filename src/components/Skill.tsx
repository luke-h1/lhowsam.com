import Skills, { SkillItem } from '@src/data/Skills';
import styles from '@src/styles/skills.module.scss';

const Skill = () => {
  return (
    <section id="skills" className="mt-4 mb-12">
      <h1 className="section__title text-4xl">Skills</h1>

      <div className={styles.skillsContainer}>
        {Skills.map((s: SkillItem) => {
          return (
            <div key={s.title}>
              <header className="text-2xl mt-5 mb-2">
                <h1>{s.title}</h1>
              </header>

              <ul className={styles.skillsItem}>
                {s.items.map((item) => (
                  <li key={item}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
    </section>
  );
};
export default Skill;
