import React, {useState} from 'react'
import styles from "./Zoom.module.css";


// using use state to make simple zoom funtion for image
  export default function Zoom({submission}) {
  const [isZoomed, setIsZoomed] = useState(false)

  const Zoom = () => {
  setIsZoomed(!isZoomed)
    
    }



  return (
  <div className={`${styles.Zoom} ${isZoomed ? styles.isZoomed : ""}`}>
  <img onClick={Zoom} className={styles.screenshot} src={submission} alt="screenshot-of-project" />
  <button onClick={Zoom}className={styles.photo}>🔍ENLARGE PHOTO</button>
  </div>
  )
  }
