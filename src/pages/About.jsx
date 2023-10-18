import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.heading}>
        Hi there,<span className={styles.hand}>👋</span> I'm ANKUR AUTI ! 
      </h1>
      <div className="info">
      
      </div>
      <h2 className={styles.sub_heading}>
      🐱‍👤 I am Batman with Spiderman's wealth
      </h2>
      <h3 className={styles.info1}>
      🧙‍♂️ I'm a MERN stack developer, I possess the ability to craft
        captivating web applications using the mystical powers of MongoDB,
        Express, React, and Node.js. BSc graduate and self-taught web developer.
        </h3><h3 className={styles.info2}>
        👨‍💻 Expertise in front-end development, combining functionality and design.
        Constantly learning and staying updated with industry trends. 
        Committed to delivering exceptional results and transforming ideas into
        captivating online experiences.
      </h3>
      <h3 className={styles.info3}>
        🎓 Education Degree: Bachelor of Science (B.Sc.) in Computer Science Dr.
        Babasaheb Ambedkar Marathwada University
      </h3>
      <h3 className={styles.info4}>
        💡 Self-Study and Online Resources: MERN Stack Web Development Course
        Angela Yu's Udemy course Official documentation andYouTube tutorials.
      </h3>
    </div>
  );
};

export default About;
