// import styles from "./Card.module.css";
// import Circle from "./Circle";

// function Card({ output, thinking }) {
//   return (
//     <div className={styles.container}>
//       <Circle output={output} />
//       {thinking && "thinking..."}
//     </div>
//   );
// }

// export default Card;

import styles from "./Card.module.css";

function Card(props) {
  const classes = props.className;
  return (
    <div className={`${styles.container} ${classes}`}>{props.children}</div>
  );
}

export default Card;
