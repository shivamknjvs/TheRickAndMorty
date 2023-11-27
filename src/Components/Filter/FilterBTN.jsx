import React from "react";
import "./FilterBTN.css";

// FilterBTN component for radio button filter
const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    // Filter button container
    <div className="filter-btn">
      {/* Radio input for the filter button */}
      <input
        className="input-radio"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      
      {/* Label for the filter button */}
      <label
        // Click event handler to execute the task and update page number
        onClick={() => {
          task(input);
          updatePageNumber(1);
        }}
        className="btn btn-outline-primary"
        htmlFor={`${name}-${index}`}
      >
        {/* Text content of the filter button */}
        {input}
      </label>
    </div>
  );
};

export default FilterBTN;

