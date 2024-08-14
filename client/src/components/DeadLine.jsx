import React from 'react';

function DeadlineFilter({ selectedDeadlines, setSelectedDeadlines }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedDeadlines([...selectedDeadlines, value]);
    } else {
      setSelectedDeadlines(selectedDeadlines.filter((deadline) => deadline !== value));
    }
  };

  return (
    <div className="filter-group">
      <h4>Deadline</h4>
      <label>
        <input type="checkbox" value="This Week" onChange={handleChange} />
        This Week
      </label>
      <label>
        <input type="checkbox" value="This Month" onChange={handleChange} />
        This Month
      </label>
      <label>
        <input type="checkbox" value="Next Month" onChange={handleChange} />
        Next Month
      </label>
    </div>
  );
}

export default DeadlineFilter;
