// // with props.children
// import styles from "./Card.module.css";
// function Card({ children, className }) {
//   const classes = className;
//   return <div className={`${styles.container} ${classes}`}>{children}</div>;
// }

// export default Card;

/////////////////////////////////////////////////////////////////
// without props.children
import styles from "./Card.module.css";
import Circle from "./Circle";

function Card({ output, thinking }) {
  return (
    <div className={styles.container}>
      <Circle output={output} />
      {thinking && "thinking..."}
    </div>
  );
}

export default Card;
