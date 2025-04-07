import React from "react";
import styles from "./footer01.module.css";

function footer01() {
  return (
    <div className={styles.container}>
      <div className={styles.footerEmpty}></div>
      <div className={styles.footerCompany}>
        <p className={styles.footerTitle}>Company</p>
        <p className={styles.footerText}>About Us</p>
        <p className={styles.footerText}>Careers</p>
        <p className={styles.footerText}>Partners</p>
      </div>
      <div className={styles.footerCourses}>
        <p className={styles.footerTitle}>Courses</p>
        <p className={styles.footerText}>Register</p>
        <p className={styles.footerText}>Login</p>
        <p className={styles.footerText}>Projects</p>
        <p className={styles.footerText}>Teachers</p>
        <p className={styles.footerText}>Parents</p>
        <p className={styles.footerText}>Resources</p>
      </div>
      <div className={styles.footerSupport}>
        <p className={styles.footerTitle}>Support</p>
        <p className={styles.footerText}>FAQs</p>
        <p className={styles.footerText}>Helpdesk</p>
        <p className={styles.footerText}>Contact Us</p>
      </div>
      <div className={styles.footerLegal}>
        <p className={styles.footerTitle}>Legal</p>
        <p className={styles.footerText}>Terms & Conditions</p>
        <p className={styles.footerText}>Privacy Policy</p>
      </div>
      <div className={styles.footerLevelup}>
        <p className={styles.footerTitle}>LevelUp Works</p>
        <p className={styles.footerText}>
          LevelUp Works LevelUp Works is an Auckland-based enterprise dedicated
          to developing game-based learning software to help teachers in
          response to the New Zealand Digital Technologies & Hangarau Matihiko.
        </p>
        <p className={styles.footerText}>alan@levelupworks.com</p>
        <p className={styles.footerText}>(021) 668 185</p>
      </div>
      <div className={styles.footerEnd}></div>
    </div>
  );
}

export default footer01;
