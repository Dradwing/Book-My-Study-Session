import React from 'react';
import './SearchBar.css';

function SearchBar({ searchQuery,setSearchQuery }) {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  return (
      <form className="search-bar" onSubmit={handleSubmit} style={{width:"100%"}}>
          <input
            type="text"
            placeholder="Search for subjects or tutors..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
  );
}

export default SearchBar;
