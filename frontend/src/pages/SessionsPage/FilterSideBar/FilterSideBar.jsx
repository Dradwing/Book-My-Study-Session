import React, { useState } from 'react';
import './FilterSideBar.css';

function FilterSidebar({ filters, handleFiltersChange }) {
  const [expanded, setExpanded] = useState({
    class: false,
    subject: false,
    duration: false,
    rating: false,
    language: false,
    price: false,
    topics: false,
  });

  const [showMore, setShowMore] = useState({
    class: false,
    subject: false,
    duration: false,
    rating: false,
    language: false,
    price: false,
    topics: false,
  });

  const toggleExpand = (filter) => {
    setExpanded((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const toggleShowMore = (filter) => {
    setShowMore((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const renderCheckboxes = (category, options) => (
    <div className={`filter-section ${expanded[category] ? 'expanded' : ''}`}>
      {expanded[category] && options.map((option, index) => (
        <div key={index} className={`checkbox-item ${index >= 7 && !showMore[category] ? 'hidden' : ''}`}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters[category] !== undefined && filters[category].includes(option)}
              onChange={() => handleFiltersChange(category, option)}
            />
            <span className="custom-checkbox" />
            {option}
          </label>
        </div>
      ))}
      {options.length > 7 && expanded[category] && (
        <button className="toggle-button" onClick={() => toggleShowMore(category)}>
          {showMore[category] ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );

  return (
    <div>
      {['class', 'subject', 'duration', 'rating', 'language', 'price', 'topics'].map((category, index) => (
        <div key={index} className="filter-category">
          <div className="filter-header" onClick={() => toggleExpand(category)}>
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <span className={`dropdown-symbol ${expanded[category] ? 'expanded' : ''}`}>&#9662;</span>
          </div>
          {renderCheckboxes(category, {
            class: ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
            subject: ['Physics', 'Chemistry', 'Mathematics', 'Programming', 'History'],
            duration: ['1 to 4 days', '5 to 7 days', '8 to 10 days', '11 to 15 days', '20 to 100 days'],
            rating: ['4.5 & up', '4.0 & up', '3.5 & up', '3.0 & up', '2.5 & up'],
            language: ['English', 'Hindi', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
            price: ['Under 5000', '3000 to 5000', '2000 to 3000', '1000 to 2000'],
            topics: ['Organic Chemistry', 'Thermodynamics', 'Algebra', 'Calculus', 'Statistics', 'Quantum Physics', 'Mechanics']
          }[category])}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FilterSidebar;
