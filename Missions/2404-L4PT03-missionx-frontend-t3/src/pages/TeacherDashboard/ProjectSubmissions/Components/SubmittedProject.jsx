import React, { useEffect, useState } from 'react'
import styles from "./SubmittedProject.module.css";
import Zoom from "./Zoom.jsx";

export default function SubmittedProject({name, profile_pic, date_submitted, submission,student_id, project_id, markAsComplete,setStudentIds, setProjectIds}) {
    
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log(project_id)
        setStudentIds((prevStudentIds)=>[...prevStudentIds, student_id])
        setProjectIds((prevProjectIds)=>[...prevProjectIds, project_id])
      };
      

    return (
        <div>
        <div className={styles.checkbox}>
        <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        </div>
        </div>
        <div className={styles.container}>
        <img className={styles.student} src={profile_pic} alt="student-photo" />
        <div className={styles.containerContent}>
        <h2> {name} submitted their project</h2>
        <Zoom submission={submission}/>
        </div>
        <div className={styles.timeStamp}>
        <h4>{date_submitted}</h4> 
        </div>
        </div>
        </div>
        )
        }
