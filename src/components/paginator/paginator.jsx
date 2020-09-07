import React from "react";
import styles from "./paginator.css";

export default function Paginator() {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>1</li>
      <li className={styles.li}>2</li>
      <li className={styles.li}>3</li>
      <li className={styles.li}>4</li>
      <li className={styles.li}>5</li>
      <li className={styles.li}>6</li>
      <li className={styles.li}>7</li>
      <li className={styles.li}>8</li>
      <li className={styles.li}>9</li>
      <li className={styles.li}>10</li>
    </ul>
  );
}
