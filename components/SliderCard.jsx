import React from "react";
import styles from '../styles/SliderCard.module.css'; 

function SliderCard({ projectImage }) {
  return (
    <div className={styles.sliderCard}>
    {
      <img 
      className={styles.sliderCardProjectImage}
      src={`./${projectImage}`} 
      alt="card" 
      />
    }
    </div>
  );
}

export default SliderCard;
