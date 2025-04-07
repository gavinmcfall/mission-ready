import React, { useState } from 'react';
import styles from './ProjectTracker.module.css';

function ProjectTracker({activeCircle, setActiveCircle}) {
  const totalCircles = 15; // Number of circles
 

  const handleCircleClick = (index) => {
    console.log(index)
    setActiveCircle(index);
  };

  return (
  <div className={styles.projectTracker}>
  {Array.from({ length: totalCircles }).map((_, index) =>{ 
  index=index+1 //adding +1 to index as index start at 0
  return (
  <div
  key={index}
  className={
  activeCircle === index ? styles.bigCircle : styles.smallCircle
  }
  onClick={() => handleCircleClick(index)}
  >
  {activeCircle === index &&<span> {index}</span>}
  </div>
  )})}
  </div>
  );
  }

export default ProjectTracker;
