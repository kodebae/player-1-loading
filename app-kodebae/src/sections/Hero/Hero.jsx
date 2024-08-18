import styles from './Hero.jsx'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import Resume from '../../assets/resume.pdf'
import { useTheme } from '../../common/ThemeContext.jsx'

function Hero() {
  const { theme, toggleTheme } = useTheme();
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
          <p>
            Experienced software engineer with a strong focus on building high-performance applications to deliver impactful solutions.
          </p>
          <a href={Resume}>
            <button className='hover' download>
              Resume
            </button>
          </a>
        </div>
    </section>
  )
}

export default Hero