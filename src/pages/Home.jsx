import React from "react";
import styles from "../styles/Home.module.css";
import ankur from "../assets/ankur.jpeg";
import Ticker from "../components/Ticker";

const Home = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.main}>
    <img src={ankur} alt="profile image" className={styles.profile} />
    <div className={styles.info}>
      <div className={styles.me}>
        <h1 className={styles.head}>Ankur Auti</h1>
        <p className={styles.subhead}>
          {" "}
          &lt;{" "}
          <a
            href="https://github.com/Webdevava"
            target="#"
            className={styles.link}
          >
            Webdevava
          </a>{" "}
          /&gt;
        </p>
      </div>
        <h3>BSc CS</h3>
        <h3>Web developer</h3>

    </div>

    </div>
    <Ticker/>
    </div>
  );
};

export default Home;
