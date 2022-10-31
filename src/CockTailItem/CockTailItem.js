import React from "react";
import styles from "./CockTailItem.css";
const CockTailItem = (props) => (
  <div className={styles.CockTailItem}>
    <div>
      <img
        className={styles.imageStyle}
        src={"../assets/" + props.imageName}
        alt={props.name}
      ></img>
      <div className={styles.CocktailFooter}>
        <h3>{props.name}</h3>
        <h4>{props.info}</h4>
        <p>{props.glass}</p>
        <a
          className={`${styles.btn} ${styles.btnPrimary}`}
          href="/details"
          onClick={() => props.updateIdSelected(props.id)}
        >
          Details
        </a>
      </div>
    </div>
  </div>
);

export default CockTailItem;
