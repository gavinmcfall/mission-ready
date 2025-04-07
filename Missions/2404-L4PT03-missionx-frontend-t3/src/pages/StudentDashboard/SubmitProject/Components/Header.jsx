import React from 'react'
import brandLogo from "../../../../assets/NavBar/LevelUpWorks-blue.png";
import maoriFlag from "../../../../assets/NavBar/MaoriFlag.png";
import nzFlag from "../../../../assets/NavBar/NZFlag.png";
import styles from "../Components/Header.module.css";
import ProgressTracker from './ProjectTracker.jsx';


// Heading content

export default function Header({activeCircle, setActiveCircle,setButtonsDisabled, areButtonsDisabled}) {
 

  
  
  
  function message(){
    alert ("Nice one, help request submitted successfully!")
    console.log("Help has been requested")
  }
  
  return (
  <div className={styles.top}>
  <div>
  <img className={styles.brandLogo} src={brandLogo} alt="Brand Logo" />
  </div>
  <div className={styles.project}>
  <ul>
  <li><h2>PROJECT</h2></li>
  <li>Introduction</li>
  </ul>
  </div>
  <ProgressTracker
  activeCircle={activeCircle}
  setActiveCircle={setActiveCircle}
  />
  <div>
  </div>
  <div className={styles.nav}>
  <button  className={styles.navButtons}disabled={areButtonsDisabled} onClick={setButtonsDisabled}>
  {areButtonsDisabled ? "Project Submitted":"Start Project"} </button>        
  <button onClick={message} className={styles.navButtons1}>Ask Teacher for help</button>
  <button className={styles.navButtons2}>More Projects</button>
  </div>    
  <div className={styles.flagContainer}>
  <img className={styles.flag} src={nzFlag} alt="NZ Flag" />
  <img className={styles.flag} src={maoriFlag} alt="Maori Flag" />
  </div>
  </div>
  )
  }
