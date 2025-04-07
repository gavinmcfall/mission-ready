import React, { useState } from 'react'
import styles from "../SubmitProject/SubmitProject.module.css";
import submitProject from "../../../assets/StudentDashboard/submitProject-Photo.png";
import makeProject from "../../../assets/StudentDashboard/makeProject-screenshot.png";
import callTeacher from "../../../assets/StudentDashboard/callTeacher.png";
import Header from "./Components/Header.jsx";
import Sidebar from './Components/Sidebar.jsx';
import Footer from "./Components/Footer.jsx";
import UploadImage from './Components/UploadImage.jsx';




function SubmitProject() {
const [activeCircle, setActiveCircle] = useState(1);
const [areButtonsDisabled,setButtonsDisabled ] = useState(false)
const [uploadSuccess, setUploadSuccess] = useState(false);

  return (
    <>
     <Header
    activeCircle={activeCircle}
    setActiveCircle={setActiveCircle}
    areButtonsDisabled={areButtonsDisabled}
    setButtonsDisabled={setButtonsDisabled}
     />
      {/* Heading component of project  */}
      <div className={styles.body}>
      <Sidebar/>
      {/* side bar component of project */}
      <div className={styles.main}>
      <div className={styles.left}>
      <img className={styles.create} src={makeProject} />
      <h1 className={styles.text}>Submit project photo</h1>
      <p>After completing your project, take a screenshot of your project and upload it here.</p>
      <UploadImage
      activeCircle={activeCircle}
      areButtonsDisabled={areButtonsDisabled}
      setButtonsDisabled={setButtonsDisabled}
      setUploadSuccess={setUploadSuccess}
      />
      {uploadSuccess}
      </div>
      <div className={styles.right}>
      <img className={styles.student} src={submitProject} alt="submit Project" />
      <h1 className={styles.text}>Show your Teacher</h1>
      <p>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
      <button className={styles.btn}><img src={callTeacher} alt="call Teacher"></img>Ask Teacher for help?</button>
      </div>
      </div>
      </div>
      {/* body component of project */}
      <Footer/>
      {/* footer component of project */}
      </>
      );
      }

export default SubmitProject
