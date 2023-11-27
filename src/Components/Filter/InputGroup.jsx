import React from "react";
import "./InputGroup.css";

// InputGroup component for dropdown input group
const InputGroup = ({ name, setSearch, changeId, options, total }) => {
  return (
    // Input group container
    <div className="input-group-container">
      {/* Dropdown select element */}
      <select
        // Event handler for value change in the dropdown
        onChange={(e) => setSearch(e.target.value)}
        className="custom-select"
        id={name}
      >
        {/* Default option */}
        <option value="1">Choose...</option>
        
        {/* Mapping over options to create dropdown options */}
        {options
          ? options.map((page, index) => (
              <option key={index} value={page}>
                {name}- {page}
              </option>
            ))
          : [...Array(total).keys()].map((x, index) => {
              return (
                <option key={index} value={x + 1}>
                  {name} - {x + 1}
                </option>
              );
            })}
      </select>
    </div>
  );
};

export default InputGroup;
