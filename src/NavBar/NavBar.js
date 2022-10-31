import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <nav>
    <div className={`${styles.NavCenter}`}>
      <ul>
        <li>
          <a className={styles.linkStyle} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={styles.linkStyle} href="/about">
            About
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
