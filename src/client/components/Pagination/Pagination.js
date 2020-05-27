import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pagination.scss";

function Pagination({ totalPages, currentPage, pageNeighbours = 1 }) {
  const constructPages = () => {
    let startPage, endPage;
    if (2 * pageNeighbours + 1 >= totalPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage + pageNeighbours >= totalPages) {
        endPage = totalPages;
      } else {
        endPage = currentPage + pageNeighbours;
      }
      if (currentPage - pageNeighbours <= 1) {
        startPage = 1;
      } else {
        startPage = currentPage - pageNeighbours;
      }
    }
    if (startPage === 1 && 2 * pageNeighbours + 1 <= totalPages) {
      endPage = 2 * pageNeighbours + 1;
    }
    if (endPage === totalPages && currentPage - pageNeighbours >= 1) {
      const startVal = totalPages - 2 * pageNeighbours;
      startPage = startVal <= 1 ? 1 : startVal;
    }

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );
    return pages;
  };

  return (
    <div className="pagination-main-container">
      <nav className="pagination-navigation" aria-label="Feeds Pagination">
        <ul className="pagination">
          <li className="page-item">
            <Link
              className="page-link"
              to={`/feeds/${currentPage === 1 ? 1 : currentPage - 1}`}
            >
              Previous
            </Link>
            {constructPages().map((page) => {
              return (
                <NavLink className="page-link" key={page} to={`/feeds/${page}`}>
                  {page}
                </NavLink>
              );
            })}
            <Link
              className="page-link"
              to={`/feeds/${
                currentPage === totalPages ? totalPages : currentPage + 1
              }`}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;
