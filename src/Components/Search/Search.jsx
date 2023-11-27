import React from "react";
import "./Search.css";

const Search = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault();
    const inputValue = e.target.form.querySelector('.input').value;
    setSearch(inputValue);
  };

  return (
    <form className="search">
      <input
        onChange={(e) => {
          updatePageNumber(1);
        }}
        placeholder="Search for characters"
        className="input"
        type="text"
      />
      <button onClick={searchBtn} className="custom-btn">
        Search
      </button>
    </form>
  );
};

export default Search;

