import React from "react";
import SearchContext from "../context";
import styles from "./search.css";

export default function Search() {
  const [, setRequest] = React.useContext(SearchContext);
  const [valueInput, setValueInput] = React.useState("");

  return (
    <form
      className={styles.form}
      action="#"
      method="GET"
      onSubmit={(evt) => {
        evt.preventDefault();
        setRequest(valueInput);
      }}
    >
      <input
        className={styles.form__input}
        type="search"
        id="search"
        value={valueInput}
        placeholder="Найти репозиторий..."
        onChange={(evt) => {
          setValueInput(evt.target.value);
        }}
      />
      <button className={styles.form__btn} type="submit" aria-label="поиск" />
    </form>
  );
}
