import React, { useState } from 'react'
import styles from "./Sidebar.module.css";
import SidebarButton from './SidebarButton.jsx';
import progressTracker from "../../../../assets/TeacherDashboard/progressTracker.png";
import progressTrackerSelected from "../../../../assets/TeacherDashboard/progressTrackerSelected.png";
import studentProfiles from "../../../../assets/TeacherDashboard/studentProfiles.png";
import studentProfilesSelected from "../../../../assets/TeacherDashboard/studentProfilesSelected.png";
import helpRequests from "../../../../assets/TeacherDashboard/helpRequests.png";
import helpRequestSelected from"../../../../assets/TeacherDashboard/helpRequestsSelected.png";
import projectSubmissions from "../../../../assets/TeacherDashboard/projectSubmissions.png";
import projectSubmissionSelected from "../../../../assets/TeacherDashboard/projectSubmissionsSelected.png";
import projectLibrary from "../../../../assets/TeacherDashboard/projectLibrary.png";
import projectLibrarySelected from"../../../../assets/TeacherDashboard/projectLibrarySelected.png";
import arrowLeft from "../../../../assets/arrowLeft.png";
import profile from "../../../../assets/profile.png";
import settings from "../../../../assets/settings.png";
import logout from "../../../../assets/logout.png";

// Sidbar toggle function and content

function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  const Sidebar = () => {
 setIsActive(!isActive)
    
    }
  
  return (
    <>
      <div className={`${styles.Sidebar} ${isActive ? styles.isActive : ""}`}>

        <img className={styles.teacher} src={"/images/teachers/JasminaSalvador.png"} alt="teacher-photo" />
        <ul>
          {/*Seperate component to change images when hovered*/}
          <SidebarButton defaultImg={progressTracker} altImg={progressTrackerSelected} buttonText="PROGRESS TRACKER"/>
          <SidebarButton defaultImg={studentProfiles} altImg={studentProfilesSelected} buttonText="STUDENT PROFILES"/> 
          <SidebarButton defaultImg={helpRequests} altImg={helpRequestSelected} buttonText="HELP REQUESTS"/>
          <SidebarButton defaultImg={projectSubmissions} altImg={projectSubmissionSelected} buttonText="PROJECT SUBMISSIONS"/>
          <SidebarButton defaultImg={projectLibrary} altImg={projectLibrarySelected} buttonText="PROJECT LIBRARY"/>
            <button className={styles.button} onClick={Sidebar}><img src={arrowLeft} alt=" arrow left"></img></button>
        </ul>

        <div className={styles.footerNavBar}>
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
