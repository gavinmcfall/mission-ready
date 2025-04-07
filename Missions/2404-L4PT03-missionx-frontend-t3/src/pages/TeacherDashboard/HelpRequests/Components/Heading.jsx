import React from 'react'
import brandLogo from "../../../../assets/NavBar/LevelUpWorks-blue.png";
import maoriFlag from "../../../../assets/NavBar/MaoriFlag.png";
import nzFlag from "../../../../assets/NavBar/NZFlag.png";
import styles from "./Heading.module.css";

export default function Heading() {
  
  return (
    <div className={styles.top}>
      <div>
        <img className={styles.brandLogo} src={brandLogo} alt="Brand Logo" />
        </div>
        <div className={styles.nav}>
          <button className={styles.navButtons1}>Help Centre </button>
          <button className={styles.navButtons2}>More Projects</button>
      </div>
      
      <div className={styles.flagContainer}>
     <img className={styles.flag} src={nzFlag} alt="NZ Flag" />
          <img className={styles.flag} src={maoriFlag} alt="Maori Flag" />
        </div>
    </div>
  )
}
