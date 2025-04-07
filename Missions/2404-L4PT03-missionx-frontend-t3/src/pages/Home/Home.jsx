import React from "react";
import styles from "./Home.module.css";
import Subbody2 from "./Components/Subbody2";
import Subbody4 from "./Components/Subbody4";
import Subbody5 from "./Components/Subbody5";
import Header02 from "../../shared-components/header/Header02";
import Footer01 from "../../shared-components/footer/Footer01";

function Home() {
  return (
    <>
      <div className={styles.container}>
        {/*---- Header ----*/}

        <Header02 />

        {/*---- Main ----*/}

        <div className={styles.body}>
          <div className={styles.Subbody1}>
            <img className={styles.heroImg} src="src\assets\Home\hero.png" />
            <div className={styles.heroText}>
              <h1>
                Prepare young minds for a better{" "}
                <span className={styles.highlight}>future.</span>
              </h1>
              <h3>
                Let us help you advance students in Digital Technologies and
                other learning areas with our project-based learning programme.
              </h3>

              <div className={styles.buttons}>
                <button className={styles.learnMoreButton}>LEARN MORE</button>
                <button className={styles.signUpButton}>SIGN UP</button>
              </div>
              <p className={styles.subscriptionNote}>
                *Basic subscription includes the first 15 projects free of
                charge.
              </p>
            </div>
          </div>

          {/* image button  section with image display */}

          <Subbody2 />

          {/*Students Skills imaage section  */}

          <div className={styles.Subbody3}>
            <h2>
              Teaching Kids programming and digital skilla is MORE than just
              writing code
            </h2>
            <div className={styles.skillsImg}>
              <img src="src\assets\Home\Group 1.png" />
              <img src="src\assets\Home\Group 2.png" />
              <img src="src\assets\Home\Group 3.png" />
              <img src="src\assets\Home\Group 4.png" />
            </div>
          </div>

          {/* How the program helps teachet and school  */}

          <Subbody4 />

          {/* What are you waiting for  */}
  
          <Subbody5 />
       
        </div>

        {/*---- Footer ----*/}

        <Footer01 />
      </div>
    </>
  );
}

export default Home;
