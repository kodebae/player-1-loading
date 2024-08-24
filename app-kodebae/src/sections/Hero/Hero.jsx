import styles from '../Hero/HeroStyles.module.css'

import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import Resume from '../../assets/resume.pdf'
import { useTheme } from '../../common/ThemeContext.jsx'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img 
            className={styles.hero}
            src={heroImg} 
            alt='anime girl with glasses'
          />
          <img 
            className={styles.colorMode}
            src={themeIcon}
            alt='theme background color template'
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Karmen
            <br />
            Durbin
          </h1>
          <h2>Software Engineer</h2>
          <span>
            <a href='https://x.com/karmen_durbin' target='_blank'>
              <img src={twitterIcon} alt='Twitter X logo'/>
            </a>
            <a href='https://github.com/kodebae' target='_blank'>
              <img src={githubIcon} alt='GitHub logo'/>
            </a>
            <a href='https://www.linkedin.com/in/karmen-kristina-durbin/' target='_blank'>
              <img src={linkedinIcon} alt='LinkedIn logo'/>
            </a>
          </span>
          <p className={styles.description}>
            A dynamic software engineer with a passion for crafting high-performance applications that drive impactful solutions.
          </p>
          <a href={Resume}>
            <button className="hover">
              Resume
            </button>
          </a>
        </div>
    </section>
  )
}

export default Hero;