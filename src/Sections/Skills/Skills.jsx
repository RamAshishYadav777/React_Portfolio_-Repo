import styles from './SkillsStyles.module.css'
import checkerMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={checkerMarkIcon} skill="HTML" />
        <SkillList src={checkerMarkIcon} skill="CSS" />
        <SkillList src={checkerMarkIcon} skill="JavaScript" />
        <SkillList src={checkerMarkIcon} skill="React" />
        <SkillList src={checkerMarkIcon} skill="Redux" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkerMarkIcon} skill="Bootstrap" />
        <SkillList src={checkerMarkIcon} skill="Material UI" />
        <SkillList src={checkerMarkIcon} skill="Github" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkerMarkIcon} skill="Java " />
        <SkillList src={checkerMarkIcon} skill="Spring boot" />
        <SkillList src={checkerMarkIcon} skill="SQL" />
      </div>
      <hr />
    </section>
  );
}

export default Skills
