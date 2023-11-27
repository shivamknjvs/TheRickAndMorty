import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species.jsx";
import Status from "./Category/Status.jsx";
import "./Filter.css";

// Filter component with filter categories
const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  // Function to clear all filters and reload the page
  let clear = () => {
    updateStatus([]);
    updateGender([]);
    updateSpecies([]);
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    // Filter container
    <div className="filter-container">
      {/* Filter title */}
      <div className="filter-title">Filters</div>
      
      {/* Clear Filters button */}
      <div className="clear-filters" onClick={clear}>
        Clear Filters
      </div>
      
      {/* Filter accordion container */}
      <div className="filter-accordion" id="accordionExample">
        {/* Status filter category */}
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        
        {/* Species filter category */}
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        
        {/* Gender filter category */}
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;
