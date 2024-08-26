import styles from './ProjectStyles.module.css';
import soon from '../../assets/coming-soon.png'
import spacePic from '../../assets/space-station-proj.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spacePic}
          link="https://kodebae-iss-geo-location.netlify.app"
          h3="ISS Mapper"
          p="Space Station Tracker"
        />
        <ProjectCard
          src={soon}
          link=""
          h3="Coming Soon"
          p="WIP"
        />
        <ProjectCard
          src={soon}
          link=""
          h3="Coming Soon"
          p="WIP"
        />
        <ProjectCard
          src={soon}
          link=""
          h3="Coming Soon"
          p="WIP"
        />
      </div>
    </section>
  );
}

export default Projects;