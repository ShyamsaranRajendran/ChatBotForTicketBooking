import React, { useState } from 'react';
import SalaryFilter from '../components/SalaryFilter';
import SkillsFilter from '../components/SkillFilter';
import DeadlineFilter from '../components/DeadLine';
import '../styles/Filters.css';

function Filters() {
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedDeadlines, setSelectedDeadlines] = useState([]);

  const handleFilterSubmit = () => {
    const filters = {
      salaryRange: selectedSalaryRanges,
      skills: selectedSkills,
      deadline: selectedDeadlines,
    };

    fetch('http://localhost:4000/api/filter-jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the filtered data
      });
  };

  return (
    <div className="filters">
      <h3>Filter Jobs</h3>
      <SalaryFilter selectedSalaryRanges={selectedSalaryRanges} setSelectedSalaryRanges={setSelectedSalaryRanges} />
      <SkillsFilter selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
      <DeadlineFilter selectedDeadlines={selectedDeadlines} setSelectedDeadlines={setSelectedDeadlines} />
      <button onClick={handleFilterSubmit}>Apply Filters</button>
    </div>
  );
}

export default Filters;
