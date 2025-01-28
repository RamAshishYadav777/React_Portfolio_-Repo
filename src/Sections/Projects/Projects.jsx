
import styles from './ProjectStyle.module.css';
import myn from '../../assets/myn.jpg';
import ProjectCard from '../../common/ProjectCard';
import inde from "../../assets/inde.jpg";
import invo from "../../assets/invo.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={myn} link="https://github.com/RamAshishYadav777"
        h3="Myntra clone"
        p= "Online shopping web application"/>
        <ProjectCard src={inde} link="https://github.com/RamAshishYadav777"
        h3="Indeed clone"
        p= "Online job post and search web application"/>
        <ProjectCard src={invo} link="https://github.com/RamAshishYadav777"
        h3="Invoice processing system"
        p= "Online invoice processing web application"/>
      </div>
    </section>
  );
}

export default Projects;
