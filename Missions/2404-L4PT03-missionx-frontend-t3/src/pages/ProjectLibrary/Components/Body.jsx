import React, { useEffect } from "react";
import styles from "./body.module.css";
import Projects from "./Projects";
import { useState } from "react";

function body() {
  const [activeButton, setActiveButton] = useState("5");
  const [activeCourseButton, setActiveCourseButton] = useState("All");
  const [subscription, setSubscription] = useState([]);
  const [activityType, setActivityType] = useState([]);
  const [yearLevel, setYearLevel] = useState([]);
  const [subjectMatter, setSubjectMatter] = useState([]);
  const [course, setCourse] = useState([]);
  const [resultNum, setResultNum] = useState(5);

  // Function to update resultNum based on button clicked
  const handleResultChange = (num) => {
    setResultNum(num === "All" ? Number.MAX_SAFE_INTEGER : parseInt(num, 10));
    setActiveButton(num);
  };

  function handleChange(setFilter, filterOption) {
    setFilter((previousFilter) => {
      if (previousFilter.includes(filterOption)) {
        return previousFilter.filter((option) => option !== filterOption);
      } else {
        return [...previousFilter, filterOption];
      }
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterList}>
        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <h3>SUBSCRIPTION</h3>
            <label>
              <input
                type="checkbox"
                value="Free"
                onChange={() => handleChange(setSubscription, "Free")}
              />
              Free
            </label>
            <label>
              <input
                type="checkbox"
                value="Premium"
                onChange={() => handleChange(setSubscription, "Premium")}
              />
              Premium
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>ACTIVITY TYPE</h3>
            <label>
              <input
                type="checkbox"
                value="AI development"
                onChange={() => handleChange(setActivityType, "AI development")}
              />
              AI Development
            </label>
            <label>
              <input
                type="checkbox"
                value="animation"
                onChange={() => handleChange(setActivityType, "animation")}
              />
              Animation
            </label>
            <label>
              <input
                type="checkbox"
                value="augmented reality"
                onChange={() =>
                  handleChange(setActivityType, "augmented reality")
                }
              />
              Augmented Reality
            </label>
            <label>
              <input
                type="checkbox"
                value="blockchain"
                onChange={() => handleChange(setActivityType, "blockchain")}
              />
              Blockchain
            </label>
            <label>
              <input
                type="checkbox"
                value="chat_bot"
                onChange={() => handleChange(setActivityType, "chat_bot")}
              />
              Chatbot
            </label>
            <label>
              <input
                type="checkbox"
                value="design"
                onChange={() => handleChange(setActivityType, "design")}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                value="game development"
                onChange={() =>
                  handleChange(setActivityType, "game development")
                }
              />
              Game Development
            </label>
            <label>
              <input
                type="checkbox"
                value="machine learning"
                onChange={() =>
                  handleChange(setActivityType, "machine learning")
                }
              />
              Machine Learning
            </label>
            <label>
              <input
                type="checkbox"
                value="web development"
                onChange={() =>
                  handleChange(setActivityType, "web development")
                }
              />
              Web Development
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>YEAR LEVEL</h3>
            <label>
              <input
                type="checkbox"
                value="1-4"
                onChange={() => handleChange(setYearLevel, "1-4")}
              />
              1 - 4
            </label>
            <label>
              <input
                type="checkbox"
                value="5-6"
                onChange={() => handleChange(setYearLevel, "5-6")}
              />
              5 - 6
            </label>
            <label>
              <input
                type="checkbox"
                value="7-8"
                onChange={() => handleChange(setYearLevel, "7-8")}
              />
              7 - 8
            </label>
            <label>
              <input
                type="checkbox"
                value="9-13"
                onChange={() => handleChange(setYearLevel, "9-13")}
              />
              9 - 13
            </label>
          </div>
          <div className={styles.filterGroup}>
            <h3>SUBJECT MATTER</h3>
            <label>
              <input
                type="checkbox"
                value="art"
                onChange={() => handleChange(setSubjectMatter, "art")}
              />
              Art
            </label>
            <label>
              <input
                type="checkbox"
                value="computer science"
                onChange={() =>
                  handleChange(setSubjectMatter, "computer science")
                }
              />
              Computer Science
            </label>
            <label>
              <input
                type="checkbox"
                value="language"
                onChange={() => handleChange(setSubjectMatter, "language")}
              />
              Language
            </label>
            <label>
              <input
                type="checkbox"
                value="math"
                onChange={() => handleChange(setSubjectMatter, "math")}
              />
              Math
            </label>
            <label>
              <input
                type="checkbox"
                value="weather"
                onChange={() => handleChange(setSubjectMatter, "weather")}
              />
              Weather
            </label>
          </div>
        </div>
      </div>

      {/* # Projects Section */}

      <div className={styles.projects}>
        <div className={styles.projectSection}>
          <div className={styles.projectHeader}>
            <h1>PROJECTS</h1>
            <h2>
              Welcome to the project library. You can use the filters on the
              right to help you search for specific projects.
            </h2>
          </div>
          <div className={styles.projectFilter}>
            <div className={styles.level}>
              <button
                className={`${styles.button0} ${
                  activeCourseButton === "All" ? styles.active : ""
                }`}
                value=""
                onClick={() => {
                  setCourse(""); // Clear the course state first
                  setActiveCourseButton("All");
                }}
              >
                All
              </button>
              <button
                className={`${styles.button1} ${
                  activeCourseButton === "Beginner" ? styles.active : ""
                }`}
                value="Beginner"
                onClick={() => {
                  setCourse(""); // Clear the course state first
                  setActiveCourseButton("Beginner");
                  handleChange(setCourse, "Beginner");
                }}
              >
                Beginner
              </button>
              <button
                className={`${styles.button2} ${
                  activeCourseButton === "Intermediate" ? styles.active : ""
                }`}
                value="Intermediate"
                onClick={() => {
                  setCourse(""); // Clear the course state first
                  setActiveCourseButton("Intermediate");
                  handleChange(setCourse, "Intermediate");
                }}
              >
                Intermediate
              </button>
              <button
                className={`${styles.button3} ${
                  activeCourseButton === "Advanced" ? styles.active : ""
                }`}
                value="Advanced"
                onClick={() => {
                  setCourse(""); // Clear the course state first
                  setActiveCourseButton("Advanced");
                  handleChange(setCourse, "Advanced");
                }}
              >
                Advanced
              </button>
            </div>
            <div className={styles.resultNum}>
              <span>Show</span>
              <button
                className={`${styles.button4} ${
                  activeButton === "5" ? styles.active : ""
                }`}
                onClick={() => handleResultChange("5")}
              >
                5
              </button>
              <button
                className={`${styles.button5} ${
                  activeButton === "10" ? styles.active : ""
                }`}
                onClick={() => handleResultChange("10")}
              >
                10
              </button>
              <button
                className={`${styles.button6} ${
                  activeButton === "All" ? styles.active : ""
                }`}
                onClick={() => handleResultChange("All")} // "All" should be a string, hence enclosed in quotes
              >
                All
              </button>
            </div>
          </div>
          <div className={styles.projectList}>
            <Projects
              subscription={subscription}
              activityType={activityType}
              yearLevel={yearLevel}
              subjectMatter={subjectMatter}
              course={course}
              resultNum={resultNum}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
