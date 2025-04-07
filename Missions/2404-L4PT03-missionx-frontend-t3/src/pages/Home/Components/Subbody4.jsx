import React from "react";
import styles from "../Home.module.css";
import star from "../../../assets/Home/star.png";
import { useState } from "react";

export default function Pgmbenefits() {
  const [Activebenefits, setActiveBenefits] = useState("keyCompBttnCtnt");

  function rendering() {
    switch (Activebenefits) {
      case "keyCompBttnCtnt":
        return (
          <div className={styles.buttonclicked}>
            <ul>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>THINKING</h2>
                  <p>
                    In particular the programme focused on problem solving,
                    design thinking and computational thinking.
                  </p>
                </div>
              </li>

              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>DISCERNING CODES</h2>
                  <p>
                    Analysing language, symbols, and texts in order to
                    understand and make sense of the codes in which knowledge is
                    expressed..
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>SELF MANAGEMENT</h2>
                  <p>
                    Projects and challenges are designed to motivate students to
                    explore and experiment with self-motivation
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>RELATIONSHIP WITH PEERS</h2>
                  <p>
                    The programme is designed with unplugged sessions where
                    students interact in a range of different situations,
                    including things like being able to listen well, recognise
                    different points of view, and share ideas.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>PARTICIPATION AND COLLABRATION</h2>
                  <p>
                    The programme encouragestudents to be involved in
                    communities ,such as family,whanau,school and contribute and
                    make connnections with other people
                  </p>
                </div>
              </li>
            </ul>
          </div>
        );

      case "learningBttnCtnt":
        return (
          <div className={styles.buttonclicked}>
            <ul>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Personalized Learning</h2>
                  <p>
                    Learning pathways should be tailored to individual student
                    needs, interests, and learning styles to maximize engagement
                    and achievement.
                  </p>
                </div>
              </li>

              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Competency-Based Progression</h2>
                  <p>
                    Learning is measured by mastery of skills and knowledge
                    rather than seat time, allowing students to progress at
                    their own pace.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Technology Integration</h2>
                  <p>
                    Technology can provide personalized learning experiences,
                    access to information
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Work-Integrated Learning</h2>
                  <p>
                    Real-world experiences through internships, apprenticeships,
                    or work-based projects connect classroom learning to career
                    goals.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>PARTICIPATION AND COLLABRATION 2</h2>
                  <p>
                    The programme encouragestudents to be involved in
                    communities ,such as family,whanau,school and contribute and
                    make connnections with other people
                  </p>
                </div>
              </li>
            </ul>
          </div>
        );

      case "digitalBttnCtn":
        return (
          <div className={styles.buttonclicked}>
            <ul>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Digital Literacy</h2>
                  <p>
                    Develop essential digital skills, such as critical thinking,
                    information literacy, and digital citizenship, to navigate
                    the digital world responsibly
                  </p>
                </div>
              </li>

              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Creative Use of Digital Tools</h2>
                  <p>
                    Utilize a variety of digital tools for creating,
                    communicating, and collaborating on projects, fostering
                    innovation and problem-solving.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Computational Thinking</h2>
                  <p>
                    Develop logical reasoning and problem-solving skills through
                    coding, algorithms, and data analysis, preparing them for
                    future careers.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Digital Safety and Wellbeing</h2>
                  <p>
                    Understand online risks and develop strategies to protect
                    personal information and maintain digital wellbeing.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Digital Equity</h2>
                  <p>
                    Ensure equal access to technology and digital resources for
                    all students, regardless of socioeconomic background or
                    location.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        );
      case "irdBttnCtn":
        return (
          <div className={styles.buttonclicked}>
            <ul>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Digital Manufacturing and Design</h2>
                  <p>
                    Learn about digital design tools, 3D printing, and
                    computer-aided manufacturing (CAM) to create physical
                    products.
                  </p>
                </div>
              </li>

              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Automation and Robotics</h2>
                  <p>
                    Understand the principles of automation and robotics,
                    exploring their applications in various industries.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Data Analytics and IoT</h2>
                  <p>
                    Learn to collect, analyze, and interpret data from various
                    sources using data analytics tools and IoT devices.
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Cyber-Physical Systems</h2>
                  <p>
                    Explore the integration of physical and digital systems,
                    understanding the concept of the Internet of Things (IoT).
                  </p>
                </div>
              </li>
              <li className={styles.contentsli}>
                <img src={star}></img>
                <div className={styles.subContents}>
                  <h2>Advanced Materials and Manufacturing Processes</h2>
                  <p>
                    Learn about new materials and advanced manufacturing
                    techniques, such as additive manufacturing and
                    nanotechnology.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        );

      default:
        break;
    }
  }

  return (
    <div className={styles.Subbody4}>
      <h1>How our Programe helps teachers and schools </h1>
      <div className={styles.PgmBenefitsBttn}>
        <button
          onClick={() => setActiveBenefits("learningBttnCtnt")}
          className={
            Activebenefits === "learningBttnCtnt"
              ? styles.clicked
              : styles.notClicked
          }
        >
          LEARNING PATHWAYS
        </button>
        <button
          onClick={() => setActiveBenefits("digitalBttnCtn")}
          className={
            Activebenefits === "digitalBttnCtn"
              ? styles.clicked
              : styles.notClicked
          }
        >
          DIGITAL TECHNOLOGIES
        </button>
        <button
          onClick={() => setActiveBenefits("keyCompBttnCtnt")}
          className={
            Activebenefits === "keyCompBttnCtnt"
              ? styles.clicked
              : styles.notClicked
          }
        >
          KEY COMPETENCIES
        </button>
        <button
          onClick={() => setActiveBenefits("irdBttnCtn")}
          className={
            Activebenefits === "irdBttnCtn" ? styles.clicked : styles.notClicked
          }
        >
          IRD4.0
        </button>
      </div>

      <div className={styles.pgmBttnContents}>
        <h1>Enhance key competencies</h1>
        <p>
          The programme enhances capabilities of students in the 5 Key
          Competencies identified in the New Zealand Curriculum:
        </p>
      </div>
      {rendering()}
    </div>
  );
}
