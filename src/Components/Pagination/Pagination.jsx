import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

// Pagination component with ReactPaginate
const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  // Callback function for page change
  let pageChange = (data) => {
    console.log(data.selected);
    updatePageNumber(data.selected + 1);
  };

  // State and effect for tracking window width
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    // Add and remove event listener for window resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      {/* ReactPaginate component for pagination */}
      <ReactPaginate
        containerClassName="pagination-container"
        pageClassName="pagination-button"
        activeClassName="pagination-active"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="pagination-button"
        nextClassName="pagination-button"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  );
};

export default Pagination;
