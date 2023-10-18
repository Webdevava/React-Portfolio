import React from 'react'
import styles from '../styles/ProjectsCard.module.css'

const ProjectsCard = (props) => {
  return (
   <div className={styles.project_card}>
   <img src={props.image} alt="" className={styles.project_img}/>
   <div className={styles.project_info}>
   <p>{props.title}</p>
   <a href={props.link} target="#" className={styles.project_link}>demo &gt; </a>
   </div>
   </div>
  )
}

export default ProjectsCard
