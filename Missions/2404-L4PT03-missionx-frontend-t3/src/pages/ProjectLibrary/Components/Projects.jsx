import { useEffect, useState } from "react";
import styles from "./Projects.module.css";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function Projects({
  subscription,
  activityType,
  yearLevel,
  subjectMatter,
  course,
  resultNum,
}) {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        const processedResult = result.map((project) => {
          let newYearLevel;
          if (project.year_level <= 4) {
            newYearLevel = "1-4";
          } else if (project.year_level === 5 || project.year_level === 6) {
            newYearLevel = "5-6";
          } else if (project.year_level === 7 || project.year_level === 8) {
            newYearLevel = "7-8";
          } else if (project.year_level >= 9 || project.year_level <= 13) {
            newYearLevel = "9-13";
          } else {
            newYearLevel = "God Level Academia";
          }
          return {
            ...project,
            year_level: newYearLevel,
          };
        });
        setProjects(processedResult); // Sets the inital state of this useState
        setFilteredProjects(processedResult); // Sets the inital state of this useState
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredData = projects.filter((project) => {
      const subscriptionFilterPassed =
        subscription.length === 0 ||
        subscription.includes(project.subscription);
      const activityFilterPassed =
        activityType.length === 0 ||
        activityType.includes(project.activity_type);
      const yearLevelFilterPassed =
        yearLevel.length === 0 || yearLevel.includes(project.year_level);
      const subjectMatterFilterPassed =
        subjectMatter.length === 0 ||
        subjectMatter.includes(project.subject_matter);
      const courseFilterPassed =
        course.length === 0 || course.includes(project.course);
      return (
        subscriptionFilterPassed &&
        activityFilterPassed &&
        yearLevelFilterPassed &&
        subjectMatterFilterPassed &&
        courseFilterPassed
      );
    });
    const showFilteredData = filteredData.length > 0;
    setFilteredProjects(filteredData);
  }, [subscription, activityType, yearLevel, subjectMatter, course]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      {filteredProjects.slice(0, resultNum).map((project) => (
        <div key={project.project_id} className={styles.card}>
          <img src={project.project_pic} alt={project.name} />
          <h1>{project.name}</h1>
          <h2>
            {toUpperCase(project.course)} | {toTitleCase(project.activity_type)}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Projects;
