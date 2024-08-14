import React, { useState } from 'react';

function SkillsFilter({ onChange }) {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const updatedSkills = selectedSkills.includes(value)
      ? selectedSkills.filter((skill) => skill !== value)
      : [...selectedSkills, value];

    setSelectedSkills(updatedSkills);
    onChange(updatedSkills); // Pass selected skills to parent component
  };

  return (
    <div className="filter-group">
      <h4>Skills</h4>
      <label>
        <input type="checkbox" value="JavaScript" onChange={handleCheckboxChange} />
        JavaScript
      </label>
      <label>
        <input type="checkbox" value="React" onChange={handleCheckboxChange} />
        React
      </label>
      <label>
        <input type="checkbox" value="Node.js" onChange={handleCheckboxChange} />
        Node.js
      </label>
      <label>
        <input type="checkbox" value="Python" onChange={handleCheckboxChange} />
        Python
      </label>
    </div>
  );
}

export default SkillsFilter;
