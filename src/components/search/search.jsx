import React from "react";
import SearchContext from "../context";
import "./search.css";

export default function Search() {
  const [, setRequest] = React.useContext(SearchContext);
  const [valueInput, setValueInput] = React.useState("");

  return (
    <form
      action="#"
      method="GET"
      className="search-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        setRequest(valueInput);
      }}
    >
      <input
        className="search-form__input"
        type="search"
        id="search"
        value={valueInput}
        placeholder="Найти репозиторий..."
        onChange={(evt) => {
          setValueInput(evt.target.value);
        }}
      />
      <button className="search-form__btn" type="submit" aria-label="поиск" />
    </form>
  );
}
