import React, { useState } from "react";
import img1 from "../../../assets/Home/laptop1.png";
import img2 from "../../../assets/Home/laptop2.png";
import img3 from "../../../assets/Home/laptop3.png";
import img4 from "../../../assets/Home/laptop4.png";
import games from "../../../../src/assets/Home/games.png";
import animation from "../../../../src/assets/Home/animation.png";
import styles from "../Home.module.css";


export default function Subbody2() {
  const [activeImage, setActiveImage] = useState("animation");

  const images = {
    animation: img1,
    games: img2,
    argreality: img3,
    chatbot: img4,
  };

  return (
    <div className={styles.Subbody2}>
      <div className={styles.buttonContainer}>
        <h1> What we offer</h1>
        <h3>
          The Creative Problem Solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designed by New Zealand’s leading IT industry experts and schools.
        </h3>
        <h2> What will students create?</h2>

        <button>
          <img
            onClick={() => setActiveImage("animation")}
            className={styles.animation}
            src={animation}
          />
        </button>

        <button>
          <img
            className={styles.argrealityBttn}
            onClick={() => setActiveImage("games")}
            src={games}
          />
        </button>
        <button>
          <img
            className={styles.chatbotsBttn}
            onClick={() => setActiveImage("chatbot")}
            src="src\assets\Home\chatbots.png"
          />
        </button>
        <button>
          <img
            className={styles.argrealityBttn}
            onClick={() => setActiveImage("argreality")}
            src="src\assets\Home\augreality.png"
          />
        </button>
      </div>

      <div className={styles.Subbody2Sub}>
        <img src={images[activeImage]} />
      </div>
    </div>
  );
}
