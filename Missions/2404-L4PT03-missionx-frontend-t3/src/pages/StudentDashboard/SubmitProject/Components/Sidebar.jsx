import React, { useState } from 'react'
import styles from "../Components/Sidebar.module.css";
import SidebarButton from './SidebarButton.jsx';
import learningObjectives from "../../../../assets/StudentDashboard/learningObjectives.png"
import learningObjectivesSelected from "../../../../assets/StudentDashboard/learningObjectivesSelected.png"
import instructions from "../../../../assets/StudentDashboard/instructions.png"
import instructionsSelected from "../../../../assets/StudentDashboard/instructionsSelected.png"
import video from "../../../../assets/StudentDashboard/video.png"
import videoSelected from "../../../../assets/StudentDashboard/videoSelected.png"
import makeProject from "../../../../assets/StudentDashboard/makeProject.png"
import makeProjectSelected from "../../../../assets/StudentDashboard/makeProjectSelected.png"
import submitProject from "../../../../assets/StudentDashboard/submitProject.png"
import submitProjectSelected from "../../../../assets/StudentDashboard/submitProjectSelected.png"
import bonusChallenge from "../../../../assets/StudentDashboard/bonusChallenge.png"
import takeTheQuiz from "../../../../assets/StudentDashboard/takeTheQuiz.png"
import arrowLeft from "../../../../assets/arrowLeft.png"
import profile from "../../../../assets/profile.png"
import settings from "../../../../assets/settings.png"
import logout from "../../../../assets/logout.png"

// Sidbar toggle function and content

function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  const Sidebar = () => {
  setIsActive(!isActive)


  }

  return (
    <>
    <div className={`${styles.Sidebar} ${isActive ? styles.isActive : ""}`}>
    <img className={styles.student} src={"/images/students/RawiriFletcher.png"} alt="student-photo" />
    <ul>
    <SidebarButton defaultImg={learningObjectives} altImg={learningObjectivesSelected} buttonText="LEARNING OBJECTIVES"/>
    <SidebarButton defaultImg={instructions} altImg={instructionsSelected} buttonText="INSTRUCTIONS"/>
    <SidebarButton defaultImg={video} altImg={videoSelected} buttonText="VIDEO"/>
    <SidebarButton defaultImg={makeProject} altImg={makeProjectSelected} buttonText="MAKE PROJECT"/>
    <SidebarButton defaultImg={submitProject} altImg={submitProjectSelected} buttonText="SUBMIT PROJECT"/>
    <SidebarButton defaultImg={bonusChallenge} altImg={bonusChallenge} buttonText="BONUS CHALLENGE"/>
    <SidebarButton defaultImg={takeTheQuiz} altImg={takeTheQuiz} buttonText="TAKE THE QUIZ"/>
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
