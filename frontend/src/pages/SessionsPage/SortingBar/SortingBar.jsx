import React from 'react';
import './SortingBar.css';

function SortingBar({ handleSortByChange }) {

  return (
    <div className="sorting-bar">
      <span className="sort-by-text">Sort By:</span>
      <select className="sort-select" onChange={(event)=>handleSortByChange(event.target.value)}>
        <option value="highestRated">Highest Rated</option>
        <option value="mostReviewed">Most Reviewed</option>
        <option value="mostRelevant">Most Relevant</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

export default SortingBar;
