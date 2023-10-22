import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from '../styles/Ticker.module.css';

const techNames = [
  'MongoDB',
  'Express',
  'React',
  'Node.js',
  'REST',
  'HTML',
  'Javascript',
  'Java',
  'Python',
  'CSS',
  'SCSS',
  'Next.js',
  'Astro',
  'Git',
  'GitHub',
  'SpringBoot',
];

function Ticker() {
  return (
    <div className={styles.ticker_container}>
      <Marquee
      className={styles.Marquee}
        gradient={false} // Set to true if you want a gradient effect
        speed={75} // Adjust the speed as needed
        direction="left" // Change to "right" for right-to-left scrolling
        style={{ width: '100%',height: '100%' }}
      >
        {techNames.map((name, index) => (
          <span
            key={index}
            className={styles.ticker_item}
          >
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default Ticker;
