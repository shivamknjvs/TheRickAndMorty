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
        type="checkbox"
        name={name}
        id={`${name}-${index}`}
      />
      
      {/* Label for the filter button */}
      <label
        // Click event handler to execute the task and update page number
        onClick={() => {
          task((prevArray) => {
            let updatedArray;
            // Check if the checkbox is checked
            if (prevArray.includes(input)) {
              // If checked, remove the element from the array
              updatedArray = prevArray.filter((item) => item !== input);
            } else {
              // If unchecked, add the element to the array
              updatedArray = [...prevArray, input];
            }
            // Update page number
            updatePageNumber(1);
            // Return the updated array for the next state update if needed
            return updatedArray;
          });
        }}
        className=""
        htmlFor={`${name}-${index}`}
      >
        {/* Text content of the filter button */}
        {input}
      </label>
    </div>
  );
};

export default FilterBTN;

