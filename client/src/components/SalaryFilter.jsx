import React, { useState } from 'react';

function SalaryFilter({ onChange }) {
  const [selectedSalaries, setSelectedSalaries] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const updatedSalaries = selectedSalaries.includes(value)
      ? selectedSalaries.filter((salary) => salary !== value)
      : [...selectedSalaries, value];

    setSelectedSalaries(updatedSalaries);
    onChange(updatedSalaries); // Pass selected salaries to parent component
  };

  return (
    <div className="filter-group">
      <h4>Salary Range</h4>
      <label>
        <input type="checkbox" value="$0 - $50,000" onChange={handleCheckboxChange} />
        $0 - $50,000
      </label>
      <label>
        <input type="checkbox" value="$50,000 - $100,000" onChange={handleCheckboxChange} />
        $50,000 - $100,000
      </label>
      <label>
        <input type="checkbox" value="$100,000 - $150,000" onChange={handleCheckboxChange} />
        $100,000 - $150,000
      </label>
      <label>
        <input type="checkbox" value="$150,000+" onChange={handleCheckboxChange} />
        $150,000+
      </label>
    </div>
  );
}

export default SalaryFilter;
