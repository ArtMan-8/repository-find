import React from "react";
import PropTypes from "prop-types";
import styles from "./paginator.css";

export default function Paginator({ pages, currentPage, setPage }) {
  const page = () => {
    const markup = [];
    for (let i = 1; i <= pages; i += 1) {
      markup.push(
        <li
          key={i}
          className={
            i === currentPage
              ? `${styles.li} ${styles.li__active}`
              : `${styles.li}`
          }
        >
          <a
            className={styles.a}
            href={i}
            onClick={(evt) => {
              evt.preventDefault();
              setPage(i);
            }}
          >
            {i}
          </a>
        </li>
      );
    }

    return markup;
  };

  return <ul className={styles.ul}>{page()}</ul>;
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
