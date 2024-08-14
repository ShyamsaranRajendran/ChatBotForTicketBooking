import React from 'react';
import Filters from './Filters.js';
import JobListings from './JobListings.js';
// import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="filters-column">
        <Filters />
      </div>
      <div className="job-listings-column">
        <JobListings />
      </div>
    </div>
  );
}

export default Home;
