// Gender.jsx

import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Gender.css";

const Gender = ({ updateGender, updatePageNumber }) => {
  const genders = ["female", "male", "genderless", "unknown"];
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    console.log("change from gender");
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="accordionItem">
      <div
        className="accordionHeader"
        onClick={toggleAccordion}
        role="button"
      >
        Gender
      </div>
      <div
        className="accordionCollapse"
      >
        <div className="accordionBody">
          {genders.map((item, index) => (
            <div
              className="filterItem"
              key={index}
            >
              <FilterBTN
                name="gender"
                index={index}
                updatePageNumber={updatePageNumber}
                task={updateGender}
                input={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
