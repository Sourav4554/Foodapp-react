import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  let paginationIndex = [];
  for (let i = 1; i <= Math.ceil(props.favdishes.length / props.itemsPerPage); i++) {
             paginationIndex.push(i);
  }

  const nextDishes = (event) => {
    props.setCurrentPage(event.target.id);
    let pageNumber = parseInt(event.target.id);
    props.setActiveColor(pageNumber);
  };

  let pages = paginationIndex.map((pagenumber) => {
    return (
      <li
        id={pagenumber}
        onClick={(event) => nextDishes(event)}
        className={props.activeColor === pagenumber ? "active" : ""}
      >
        {pagenumber}
      </li>
    );
  });
  return (
    <div className="div">
      <ul className="unordered-list">{pages}</ul>
    </div>
  );
};

export default Pagination;
