import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {


  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
      <li className={styles.item}><NavLink className={styles.link} to="/">_Home</NavLink></li>
      <li className={styles.item}><NavLink className={styles.link} to="/about">_About</NavLink></li>
      <li className={styles.item}><NavLink className={styles.link} to="/projects">_Projects</NavLink></li>
      <li className={styles.item}><NavLink className={styles.link} to="/contact">_Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
