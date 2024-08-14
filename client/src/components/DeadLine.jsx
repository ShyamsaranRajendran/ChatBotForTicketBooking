import React from 'react';

function DeadlineFilter() {
  return (
    <div className="filter-group">
      <h4>Deadline</h4>
      <label>
        <input type="checkbox" />
        This Week
      </label>
      <label>
        <input type="checkbox" />
        This Month
      </label>
      <label>
        <input type="checkbox" />
        Next Month
      </label>
    </div>
  );
}

export default DeadlineFilter;
