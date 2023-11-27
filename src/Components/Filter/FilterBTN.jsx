import React from "react";
import "./FilterBTN.css"; 

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div className="filter-btn">
      <input
        className="input-radio"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label
        onClick={() => {
          task(input);
          updatePageNumber(1);
        }}
        className="btn btn-outline-primary"
        htmlFor={`${name}-${index}`}
      >
        {input}
      </label>
    </div>
  );
};

export default FilterBTN;
