import React from "react";
import styles from "./TeacherProfileViewer.module.css";
import Header01 from "../../shared-components/header/Headerteacher";
import Body from "./components/body";
import Footer01 from "../../shared-components/footer/Footer01";

function TeacherProfileViewer() {
  return (
    <div className={styles.container}>
      <Header01 className={styles.header} />

      <Body className={styles.body} />
     
      <Footer01 className={styles.footer} />
    </div>
  );
}

export default TeacherProfileViewer;