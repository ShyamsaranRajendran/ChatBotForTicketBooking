import React from 'react';
import '../styles/JobPostCard.css';

function JobPostCard({ job }) {
  return (
    <div className="job-post-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Skills Required:</strong> {job.skills.join(', ')}</p>
      <p><strong>Deadline:</strong> {job.deadline}</p>
    </div>
  );
}

export default JobPostCard;
