import React, { useState } from 'react';
import SalaryFilter from '../components/SalaryFilter';
import SkillsFilter from '../components/SkillFilter';
import DeadlineFilter from '../components/DeadLine';
import '../styles/Filters.css';

function Filters() {
  const [salaryRange, setSalaryRange] = useState([]);
  const [skills, setSkills] = useState([]);
  const [deadline, setDeadline] = useState(null);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'salary':
        setSalaryRange(value);
        break;
      case 'skills':
        setSkills(value);
        break;
      case 'deadline':
        setDeadline(value);
        break;
      default:
        break;
    }
  };

  const applyFilters = () => {
    const filters = {
      salaryRange,
      skills,
      deadline,
    };

    // Sending the filter data to the backend
    fetch('/api/filter-jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Filtered jobs:', data);
        // Handle the filtered job data here (e.g., update the UI)
      })
      .catch((error) => {
        console.error('Error fetching filtered jobs:', error);
      });
  };

  return (
    <div className="filters">
      <h3>Filter Jobs</h3>
      <SalaryFilter onChange={(value) => handleFilterChange('salary', value)} />
      <SkillsFilter onChange={(value) => handleFilterChange('skills', value)} />
      <DeadlineFilter onChange={(value) => handleFilterChange('deadline', value)} />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;
