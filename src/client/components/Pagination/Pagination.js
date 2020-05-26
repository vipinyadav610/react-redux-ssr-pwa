import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pagination.scss";

function Pagination({ totalPages, currentPage }) {
  const constructPages = () => {
    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );
    return pages;
  };

  return (
    <div className="pagination-main-container">
      <nav className="pagination-navigation" aria-label="Feeds Pagination">
        <ul className="pagination">
          <li className="page-item">
            <NavLink
              className="page-link"
              to={`/feeds/${currentPage === 1 ? 1 : currentPage - 1}`}
            >
              Previous
            </NavLink>
            {constructPages().map((page) => {
              return (
                <NavLink className="page-link" key={page} to={`/feeds/${page}`}>
                  {page}
                </NavLink>
              );
            })}
            <NavLink
              className="page-link"
              to={`/feeds/${
                currentPage === totalPages ? totalPages : totalPages + 1
              }`}
            >
              Next
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;
