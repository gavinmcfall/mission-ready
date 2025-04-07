import React from "react";
import styles from "./Header02.module.css";
import brandLogo from "../../assets/NavBar/LevelUpWorks-white.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import profile from "../../assets/profile.png";

function header01() {
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <img className={styles.brandLogo} src={brandLogo} alt="Brand Logo" />
      </div>
      <div className={styles.navLinks}>
        <button className={styles.navButtons}>HOME</button>
        <button className={styles.navButtons}>PROJECTS</button>
        <button className={styles.navButtons}>TEACHERS</button>
      </div>
      <div className={styles.languages}>
        <p>LANG</p>
        <img className={styles.flag} src={maoriFlag} alt="Maori Flag" />
        <img className={styles.flag} src={nzFlag} alt="NZ Flag" />
      </div>
      <div className={styles.user}>
        <img className={styles.profile} src={profile} alt="profile" />
        <p className={styles.register}>Register | </p>
        <p className={styles.login}> Login</p>
      </div>
    </div>
  );
}

export default header01;
