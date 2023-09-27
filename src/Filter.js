// Filter.js
import React from 'react';

const Filter = ({ filterTitle, filterRating, handleFilterTitleChange, handleFilterRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterTitle}
        onChange={handleFilterTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={filterRating}
        onChange={handleFilterRatingChange}
      />
    </div>
  );
};

export default Filter;