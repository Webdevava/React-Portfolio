import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    <div className={styles.project_container}>
      <ProjectsCard
        title={"Amazon UI clone"}
        image={"https://github.com/Webdevava.png"}
        link={"https://github.com/Webdevava"}
      />
      <ProjectsCard
        title={"User Authentication"}
        image={"https://github.com/Webdevava.png"}
        link={"https://github.com/Webdevava"}
      />
      <ProjectsCard
        title={"Cash-Remittance"}
        image={"https://github.com/Webdevava.png"}
        link={"https://cash-remittance.vercel.app/"}
      />
      <ProjectsCard
        title={"Web-Blog"}
        image={"https://github.com/Webdevava.png"}
        link={"https://web-log-kappa.vercel.app/"}
      />
      <ProjectsCard
        title={"terminal-portfolio"}
        image={"https://github.com/Webdevava.png"}
        link={"https://terminal-portfolio-bay.vercel.app/"}
      />
    </div>
  );
};

export default Projects;
