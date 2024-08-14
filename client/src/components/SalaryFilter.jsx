import React from 'react';

function SalaryFilter() {
  return (
    <div className="filter-group">
      <h4>Salary Range</h4>
      <label>
        <input type="checkbox" />
        $0 - $50,000
      </label>
      <label>
        <input type="checkbox" />
        $50,000 - $100,000
      </label>
      <label>
        <input type="checkbox" />
        $100,000 - $150,000
      </label>
      <label>
        <input type="checkbox" />
        $150,000+
      </label>
    </div>
  );
}

export default SalaryFilter;
