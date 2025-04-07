import React from "react";
import styles from "./ProjectLibrary.module.css";
import Header01 from "../../shared-components/header/Header01";
import Footer01 from "../../shared-components/footer/Footer01";
import Body from "./Components/Body";

function ProjectLibrary() {
  return (
    <div className={styles.container}>
      <Header01 className={styles.header} />

      <Body className={styles.body} />

      <Footer01 className={styles.footer} />
    </div>
  );
}

export default ProjectLibrary;
