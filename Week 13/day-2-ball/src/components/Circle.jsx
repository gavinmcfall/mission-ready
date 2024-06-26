import styles from "./Circle.module.css";
function Circle({ output }) {
  return (
    <div className={styles.container}>
      <div>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default Circle;
