import React from "react";
import styles from "../Home.module.css";
import classroom from "../../../assets/Home/classroom.png";

export default function Subbody5() {
  return (
    <div className={styles.Subbody5}>
      <div>
        <img className={styles.Subbody5Img} src={classroom}></img>
      </div>

      <div className={styles.Subbody5Su}>
        <h1>What are you waiting for ?</h1>
        <h2>Start teaching Digital Technologies today</h2>
        <h3>
          If you need more information ,we are happy to answer any questions you
          may have
        </h3>
        <div className={styles.buttons}>
          <button className={styles.learnMoreButton}>ENQUIRE NOW</button>
          <button className={styles.signUpButton}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
