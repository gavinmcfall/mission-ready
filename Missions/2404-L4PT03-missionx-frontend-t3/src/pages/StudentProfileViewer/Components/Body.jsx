import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./body.module.css";

function Body() {
  const { id } = useParams(); // Extract the student ID from the URL
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the student data based on the ID from the URL
    fetch(`http://localhost:4000/api/v1/student/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Student not found");
        }
        return response.json();
      })
      .then((data) => {
        setStudentData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Re-run the effect when the ID changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.student}>
        <div className={styles.studentPanel}>
          <img
            className={styles.studentAvatar}
            src={studentData.profile_pic} // Dynamically load the profile picture
            alt={studentData.name} // Use the student's name for alt text
          />
          <button className={styles.avatarButton}>EDIT PROFILE</button>
          <button className={styles.avatarButton}>CHANGE PHOTO</button>
        </div>
      </div>
      <div className={styles.studentDetails}>
        <div className={styles.studentDetailsPanel}>
          <div className={styles.studentTitles}>{studentData.name}</div>{" "}
          {/* Student Name */}
          <div className={styles.studentDetailsLabels}>
            <p>School</p>
            <p>Teacher</p>
            <p>Course</p>
            <p>Date of Birth</p>
            <p>Contact No</p>
            <p>Email Address</p>
          </div>
          <div className={styles.studentDetailsValues}>
            <p>{studentData.school}</p> {/* School */}
            <p>{studentData.teacher_id}</p>{" "}
            {/* Teacher ID (you can replace with teacher's name) */}
            <p>{studentData.course}</p> {/* Course */}
            <p>
              {new Date(studentData.date_of_birth).toLocaleDateString()}
            </p>{" "}
            {/* Date of Birth */}
            <p>{studentData.contact_number}</p> {/* Contact Number */}
            <p>{studentData.email}</p> {/* Email Address */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
