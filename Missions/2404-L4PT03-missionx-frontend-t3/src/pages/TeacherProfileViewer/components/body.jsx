import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./body.module.css";

function Body() {
  const { id } = useParams(); 
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch(`http://localhost:4000/api/v1/teacher-profile`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Teacher not found");
        }
        return response.json();
      })
      .then((data) => {
        setTeacherData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.teacher}>
        <div className={styles.teacherPanel}>
          <img
            className={styles.teacherAvatar}
            src={teacherData.profile_pic} 
            alt={teacherData.name} 
          />
          <button className={styles.avatarButton}>EDIT PROFILE</button>
          <button className={styles.avatarButton}>CHANGE PHOTO</button>
          <button className={styles.avatarButton}>SETTINGS</button>
        </div>
      </div>
      <div className={styles.teacherDetails}>
        <div className={styles.teacherDetailsPanel}>
          <div className={styles.teacherTitles}>{teacherData.name}</div>{" "}
          <div className={styles.teacherDetailsLabels}>
            <p>School</p>
            <p>Date of Birth</p>
            <p>Contact No</p>
            <p>Email Address</p>
          </div>
          <div className={styles.teacherDetailsValues}>
            <p>{teacherData.school}</p> {/* School */}
            <p>
              {new Date(teacherData.date_of_birth).toLocaleDateString()}
            </p>{" "}
            {/* Date of Birth */}
            <p>{teacherData.contact_number}</p> {/* Contact Number */}
            <p>{teacherData.email}</p> {/* Email Address */}
          </div>
          <div className={styles.profilebuttons}>
            <button className={styles.backproject}>Back to Projects</button>
            <button className={styles.backdashboard}>Back to Dashboard</button>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Body;