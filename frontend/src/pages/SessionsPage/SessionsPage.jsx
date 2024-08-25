import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import FilterSideBar from './FilterSideBar/FilterSideBar.jsx';
import SortingBar from './SortingBar/SortingBar.jsx';
import SessionCardList from './SessionCardList/SessionCardList.jsx';
import './SessionsPage.css';
import axios from 'axios';

function SessionsPage() {
  const [showFilters, setShowFilters] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    class: [],
    subject: [],
    duration: [],
    rating: [],
    language: [],
    price: [],
    topics: [],
  });
  const [sortBy, setSortBy] = useState('rating'); 

  const location = useLocation();

  // Set searchQuery based on URL query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initialSearchQuery = searchParams.get('query');
    setSearchQuery(initialSearchQuery || '');
  }, [location.search]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/sessions`, {
          params: {
            query: searchQuery,
            filters: filters,
            sortBy: sortBy,
          },
        });
        const data = response.data;
        setSessions(data.data.sessions);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, [searchQuery, filters, sortBy]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const removeAllFilters = () => {
    setFilters({});
  };

  const handleFiltersChange = (filterCategory, value) => {
    setFilters((prev) => {
      const updatedFilter = prev[filterCategory].includes(value)
        ? prev[filterCategory].filter((item) => item !== value)
        : [...prev[filterCategory], value];
      return { ...prev, [filterCategory]: updatedFilter };
    });
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  return (
    <div className="sessions-page">
      <div className="search-bar-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="controls">
        <div className="filter-controls">
          <button onClick={toggleFilters} className="filter-toggle">
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <button onClick={removeAllFilters} className="remove-filters">
            Remove All Filters
          </button>
        </div>
        <SortingBar sortBy={sortBy} handleSortByChange={handleSortByChange} />
      </div>

      <div className="main-content">
        {showFilters && (
          <div className="filter-sidebar">
            <FilterSideBar filters={filters} handleFiltersChange={handleFiltersChange}  />
          </div>
        )}
        <div className="content-right">
          <SessionCardList sessions={sessions} />
        </div>
      </div>
    </div>
  );
}

export default SessionsPage;