import React from 'react'
import styles from '../styles/Footer.module.css'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.span}>copyright@2023</span>
      <ul className={styles.list}>
      <li className={styles.item}><a href="https://www.linkedin.com/in/ankur-auti-862953250/" target='#'><img src={linkedin} alt="" /></a></li>
      <li className={styles.item}><a href="https://www.instagram.com/ankurauti382/" target='#'><img src={instagram} alt="" /></a></li>
      <li className={styles.item}><a href="https://github.com/Webdevava" target='#'><img src={github} alt="" /></a></li>
      </ul>
    </footer>
  )
}

export default Footer
