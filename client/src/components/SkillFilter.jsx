import React from 'react';

function SkillsFilter({ selectedSkills, setSelectedSkills }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== value));
    }
  };

  return (
    <div className="filter-group">
      <h4>Skills</h4>
      <label>
        <input type="checkbox" value="JavaScript" onChange={handleChange} />
        JavaScript
      </label>
      <label>
        <input type="checkbox" value="React" onChange={handleChange} />
        React
      </label>
      <label>
        <input type="checkbox" value="Node.js" onChange={handleChange} />
        Node.js
      </label>
      <label>
        <input type="checkbox" value="Python" onChange={handleChange} />
        Python
      </label>
    </div>
  );
}

export default SkillsFilter;
