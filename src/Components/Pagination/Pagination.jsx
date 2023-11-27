import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"; 

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    console.log(data.selected);
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
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
