import React from "react";
import styles from "./CockTailItem.css";
import { dummy_data } from "../DUMMY_DATA.js";
import { Link } from "react-router-dom";
const CockTailItem = (props) => {
  
  const getDetails = (id) => {
    const details = dummy_data.find((item) => item.id === id);
    props.saveDetails(details);
  };

  return (
  
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
        <Link to={"/cocktail/" + props.id}>
          Details
        </Link>
      </div>
    </div>
  </div>
)};

export default CockTailItem;
