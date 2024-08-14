import React from 'react';

function SkillsFilter() {
  return (
    <div className="filter-group">
      <h4>Skills</h4>
      <label>
        <input type="checkbox" />
        JavaScript
      </label>
      <label>
        <input type="checkbox" />
        React
      </label>
      <label>
        <input type="checkbox" />
        Node.js
      </label>
      <label>
        <input type="checkbox" />
        Python
      </label>
    </div>
  );
}

export default SkillsFilter;
