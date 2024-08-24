import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Ruby on Rails" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="SpringBoot" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MVC" />
        <SkillList src={checkMarkIcon} skill="Webpack/Vite" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills