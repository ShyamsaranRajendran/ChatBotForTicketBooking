import React from 'react';
import SalaryFilter from '../components/SalaryFilter';
import SkillsFilter from '../components/SkillFilter';
import DeadlineFilter from '../components/DeadLine';
import '../styles/Filters.css';

function Filters() {
  return (
    <div className="filters">
      <h3>Filter Jobs</h3>
      <SalaryFilter />
      <SkillsFilter />
      <DeadlineFilter />
      
    </div>
  );
}

export default Filters;
