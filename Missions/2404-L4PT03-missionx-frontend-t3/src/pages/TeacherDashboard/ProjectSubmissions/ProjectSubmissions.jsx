import React, { useState, useEffect } from 'react'
import styles from "./ProjectSubmissions.module.css";
import Heading from "./Components/Heading.jsx";
import Sidebar from './Components/Sidebar.jsx';
import Footer from "./Components/Footer.jsx";
import SubmittedProject from './Components/SubmittedProject.jsx';


function ProjectSubmissions({}) {

  const [submittedProjectsData, setSubmittedProjectData,] = useState([]);
  const[studentIds, setStudentIds]=useState([]);
  const[projectIds, setProjectIds]=useState([]);

    // fetch.then()
    // useState
    // useEffect

    useEffect(() => {

    fetch("http://localhost:4000/api/v1/teacher-dashboard/project-submissions")// Creating fetch request to display on frontend
    .then((res) => res.json())
    .then((result) => {
    console.log(result)
    setSubmittedProjectData(result)
    });

    }, [])
    
    const markAsComplete = (studentIds, projectIds) => {
      fetch('http://localhost:4000/api/v1/teacher-dashboard/mark-complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ student_id:studentIds, project_id: projectIds }),
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

      });
    };

    const dateOptions = {//Changing date format to display on frontend
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "short",
    };
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
     
    };
    const formattedDate = new Intl.DateTimeFormat('en-NZ', dateOptions).format() //To display day,month,year,weekday
    const formattedTime = new Intl.DateTimeFormat('en-NZ', timeOptions).format() // To display hour and minute
     
  return (
    <>
      <Heading />
      {/* Heading component of project  */}
      <div className={styles.body}>
      <Sidebar />
      {/* side bar component of project */}
      <div className={styles.main}>
      <div className={styles.scrollbox}>
      <div className={styles.top}>
      <h1>Project Submissions</h1>
      <div className={styles.subHeading}>
      <h3>DOWNLOAD FILES</h3>
      <h3><button onClick={()=>markAsComplete(studentIds, projectIds)}> ✔ MARK AS COMPLETE PROJECT</button></h3>   
      </div> 
      </div>
      {submittedProjectsData.map((submittedProject, index) => (
      <SubmittedProject 
      key={index}
      name={submittedProject.name} 
      profile_pic={submittedProject.profile_pic}
      date_submitted={(
      <>
      {formattedDate} <br /> {formattedTime} {/* To align date on page */}
      </>
      )} 
      submission={submittedProject.submission}
      student_id={submittedProject.student_id}
      project_id={submittedProject.project_id} 
      setStudentIds={setStudentIds}
      setProjectIds={setProjectIds}
      markAsComplete={markAsComplete}
      />
      ))}
      </div>
      </div>
      </div>
      {/* body component of project */}
      <Footer />
      {/* footer component of project */}
      </>
      );
      }

export default ProjectSubmissions