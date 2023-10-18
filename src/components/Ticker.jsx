import React, { useState, useEffect } from 'react';
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
  const [tickerItems, setTickerItems] = useState([]);

  useEffect(() => {
    const animationDelay = 2000; // Delay between each item change
    const loopDelay = animationDelay * techNames.length; // Total delay for a full loop

    const updateTicker = () => {
      const items = [];
      for (let i = 0; i < techNames.length * 2; i++) {
        items.push(techNames[i % techNames.length]);
      }
      setTickerItems(items);
    };

    updateTicker(); // Initial update
    const tickerInterval = setInterval(updateTicker, loopDelay);

    return () => {
      clearInterval(tickerInterval);
    };
  }, []);

  return (
    <div className={styles.ticker_container}>
      <div className={styles.ticker}>
        {tickerItems.map((name, index) => (
          <span
            key={index}
            className={`${styles.ticker_item} ${
              index === techNames.length ? styles.active : ''
            }`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
