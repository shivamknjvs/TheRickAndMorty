import React from "react";
import "./Search.css";

// Search component with input field and search button
const Search = ({ setSearch, updatePageNumber }) => {
  // Event handler for the search button click

  const searchBtn = (e) => {
    e.preventDefault();
    
    // Get the input value from the form and set it as the search parameter

    const inputValue = e.target.form.querySelector('.input').value;
    setSearch(inputValue);
  };

  return (
    // Search form with input field and search button

    <form className="search">
      {/* Input field for entering search text */}

      <input
        onChange={(e) => {
          // Update the page number to 1 when the input value changes

          updatePageNumber(1);
        }}
        placeholder="Search here"
        className="input"
        type="text"
      />
      {/* Search button triggering the searchBtn function */}
      
      <button onClick={searchBtn} className="custom-btn">
        Search
      </button>
    </form>
  );
};

export default Search;
