import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import styles from "./Headerteacher.module.css";
import brandLogo from "../../assets/NavBar/LevelUpWorks-white.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";

function Header01() {
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();  // Use the hook for navigation
  
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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <img className={styles.brandLogo} src={brandLogo} alt="Brand Logo" />
      </div>
      <div className={styles.navLinks}>
        <button className={styles.navButtons} onClick={() => navigate("/")}>HOME</button>  {/* Use navigate to redirect */}
        <button className={styles.navButtons}>PROJECTS</button>
        <button className={styles.navButtons}>TEACHERS</button>
      </div>
      <div className={styles.languages}>
        <p>LANG</p>
        <img className={styles.flag} src={maoriFlag} alt="Maori Flag" />
        <img className={styles.flag} src={nzFlag} alt="NZ Flag" />
      </div>
      <div className={styles.user}>
        <img className={styles.profile} src={teacherData.profile_pic} alt="Profile" />
        <p className={styles.userName}>{teacherData.name}</p>
      </div>
    </div>
  );
}

export default Header01;
