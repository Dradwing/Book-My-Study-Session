import React, { useState } from 'react';
import './Banner.css';
import sampleBannerImage from "../../../assets/sample_banner_image.webp";
import { Link, useNavigate } from 'react-router-dom';

function Banner() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/sessions?query=${searchQuery}`);
  };

  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-slogan">Unlock Your Future</h1>
        <p className="banner-subtext">Find the best courses and tutors to guide you on your path to success.</p>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for subjects or tutors..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="banner-right">
        <img src={sampleBannerImage} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default Banner;