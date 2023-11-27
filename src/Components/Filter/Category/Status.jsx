// Status.jsx

import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Status.css";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    console.log("change from status");
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="accordionItem">
      <div
        className="accordionHeader"
        onClick={toggleAccordion}
        role="button"
      >
        Status
      </div>
      <div
        className="accordianCollapse1 " 
      >
        <div className="accordionBody1">
          {status.map((item, index) => (
            <div className="filterItem" key={index}>
              <FilterBTN
                key={index}
                index={index}
                name="status"
                task={updateStatus}
                updatePageNumber={updatePageNumber}
                input={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
