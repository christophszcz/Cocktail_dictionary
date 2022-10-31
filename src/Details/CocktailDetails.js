import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CocktailDetails.module.css";
import { Link } from "react-router-dom";
import { dummy_data } from "../DUMMY_DATA";

const CocktailDetails = () => {
  const params = useParams();

  const cocktail = dummy_data.find((item) => item.id == params.id);

  const ingredients = cocktail.ingredients.map((item) => <span>{item}</span>);

  return (
    <section className={styles.CocktailDetails}>
      <Link to="/">
        <button className="btn btn-primary">Back Home</button>
      </Link>
      <h2 className={styles["section-title"]}>{cocktail.name}</h2>
      <div className={styles.drink}>
        <img src={"../assets/" + cocktail.imageName} alt={cocktail.name} />
        <div className={styles["drink-info"]}>
          <p>
            <span className={styles["drink-data"]}>Name:</span>
            {cocktail.name}
          </p>
          <p>
            <span className={styles["drink-data"]}>Category:</span>
            {cocktail.category}
          </p>
          <p>
            <span className={styles["drink-data"]}>Info:</span>
            {cocktail.info}
          </p>
          <p>
            <span className={styles["drink-data"]}>Glass:</span>
            {cocktail.glass}
          </p>
          <p>
            <span className={styles["drink-data"]}>Instructons:</span>
            {cocktail.instructons}
          </p>
          <p>
            <span className={styles["drink-data"]}>Ingredients:</span>
            {ingredients}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetails;