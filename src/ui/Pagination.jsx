import React from "react";

import forwardIcon from "../assets/ForwardIcon.png";
import backwardIcon from "../assets/backwardIcon.png";

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  // to get total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageNumbersToShow = 3;
  const halfMaxPages = Math.floor(maxPageNumbersToShow / 2);

  const getPageNumbers = () => {
    let startPage = Math.max(currentPage - halfMaxPages, 1);
    let endPage = Math.min(currentPage + halfMaxPages, totalPages);

    if (currentPage <= halfMaxPages) {
      endPage = Math.min(maxPageNumbersToShow, totalPages);
    } else if (currentPage + halfMaxPages >= totalPages) {
      startPage = Math.max(totalPages - maxPageNumbersToShow + 1, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-start mt-[46px]">
      <ul className="flex gap-[22px] items-center">
        {currentPage > 1 && (
          <li>
            <img
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage - 1);
              }}
              className="cursor-pointer"
              src={backwardIcon}
            ></img>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onPageChange(number);
              }}
              className={` rounded-full ${
                number === currentPage
                  ? " w-[32px] rounded-full font-bold px-4 py-3 h-[32px] bg-white text-[#6D6D6D]"
                  : "w-[32px] rounded-full font-bold px-2 py-1 h-[32px] hover:bg-gray-300  text-white bg-[#BCBCBC]"
              }`}
              href="#!"
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <img
            src={forwardIcon}
            className=" cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
