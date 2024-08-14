import React from 'react';

function SalaryFilter({ selectedSalaryRanges, setSelectedSalaryRanges }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedSalaryRanges([...selectedSalaryRanges, value]);
    } else {
      setSelectedSalaryRanges(selectedSalaryRanges.filter((range) => range !== value));
    }
  };

  return (
    <div className="filter-group">
      <h4>Salary Range</h4>
      <label>
        <input type="checkbox" value="$0 - $50,000" onChange={handleChange} />
        $0 - $50,000
      </label>
      <label>
        <input type="checkbox" value="$50,000 - $100,000" onChange={handleChange} />
        $50,000 - $100,000
      </label>
      <label>
        <input type="checkbox" value="$100,000 - $150,000" onChange={handleChange} />
        $100,000 - $150,000
      </label>
      <label>
        <input type="checkbox" value="$150,000+" onChange={handleChange} />
        $150,000+
      </label>
    </div>
  );
}

export default SalaryFilter;
