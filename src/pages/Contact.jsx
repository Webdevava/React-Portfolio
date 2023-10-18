import React from 'react'
import styles from '../styles/Contact.module.css'
import send from '../assets/send.svg'


const Contact = () => {
  return (
    <div className={styles.contact}>
    <h1 className={styles.head}>Contact me through Mail</h1>
    <form action="https://formsubmit.co/0f74ddac1a13842eb4c4fad6b09d67ed" method="POST" className={styles.form}>
    <input type="text" name="name" placeholder='Name' required className={styles.nameInput}/>
     <input type="email" name="email"  placeholder='Email' required className={styles.emailInput} />
     <textarea name="Message" id="message" placeholder='Message' className={styles.textArea}></textarea>
     <button type="submit" className={styles.btn}>Send<img src={send} alt="" /> </button>
    </form>
    </div>
  )
}

export default Contact
