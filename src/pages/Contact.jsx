import React from 'react'
import styles from '../styles/Contact.module.css'
import send from '../assets/send.svg'


const Contact = () => {
  const emailAddress = 'your.email@example.com';
  const subject = 'Subject of the email';
  const body = 'Hello, I would like to get in touch with you.';

  // Create the mailto link with hard-coded subject and body
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className={styles.contact}>
    <h1 className={styles.head}>Contact me through Mail</h1>
    <form action="https://formsubmit.co/ankurauti@gmail.com" method="POST" className={styles.form}>
    <input type="text" name="name" placeholder='Name' required className={styles.nameInput}/>
     <input type="email" name="email"  placeholder='Email' required className={styles.emailInput} />
     <textarea name="Message" id="message" placeholder='Message' className={styles.textArea}></textarea>
     <button type="submit" className={styles.btn}>Send<img src={send} alt="" /> </button>
    </form>
    </div>
  )
}

export default Contact
