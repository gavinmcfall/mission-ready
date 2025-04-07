import React, { useState } from 'react'
import styles from "./Sidebar.module.css";
import progressTracker from "../../../../assets/TeacherDashboard/progressTracker.png"
import studentProfiles from "../../../../assets/TeacherDashboard/studentProfiles.png"
import helpRequests from "../../../../assets/TeacherDashboard/helpRequests.png"
import projectSubmissions from "../../../../assets/TeacherDashboard/projectSubmissions.png"
import projectLibrary from "../../../../assets/TeacherDashboard/projectLibrary.png"
import arrowLeft from "../../../../assets/arrowLeft.png"
import profile from "../../../../assets/profile.png"
import settings from "../../../../assets/settings.png"
import logout from "../../../../assets/logout.png"
import { NavLink } from "react-router-dom";
// Sidbar toggle function and content

function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  const Sidebar = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className={`${styles.Sidebar} ${isActive ? styles.isActive : ""}`}>

        <img className={styles.student} src={"/images/teachers/JasminaSalvador.png"} alt="student-photo" />
        <ul>
          <li><img src={progressTracker} ></img>
            <p>PROGRESS TRACKER</p></li>
          <li><img src={studentProfiles} ></img>
            <p>STUDENT PROFILES</p></li>
          <li><img src={helpRequests} ></img>
            <p>HELP REQUESTS</p></li>
          <li><img src={projectSubmissions} ></img>
            <p>PROJECT SUBMISSIONS</p></li>
          <li><img src={projectLibrary} ></img>
            <p>PROJECT LIBRARY</p></li>
            <button className={styles.button} onClick={Sidebar}><img src={arrowLeft} alt=" arrow left"></img></button>
        </ul>

        <div className={styles.settings}>
          <ul>
            <li><img src={profile}></img>
              <p>Profile</p></li>
            <li><img src={settings}></img>
              <p>Settings</p></li>
            <li><img src={logout}></img>
              <p>Log out</p></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Sidebar
