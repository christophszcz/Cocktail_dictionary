import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <section className={styles.search}>
      <form className={styles.searchForm}>
        <div className={styles.formControl}>
          <label htmlFor="name">Search</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => props.updateSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
