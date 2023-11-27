import React from "react";
import "./InputGroup.css"; 

const InputGroup = ({ name, changeID, options , total}) => {
  return (
    <div className="input-group-container">

    
      <select
        onChange={(e) => changeID(e.target.value)}
        className="custom-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {options?options.map((episode, index) => (
          <option key={index} value={index + 1}>
            {name} - {episode}
          </option>
        )):[...Array(total).keys()].map((x, index) => {
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
