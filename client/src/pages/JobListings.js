import React from 'react';
import JobPostCard from './JobPostCard';
import '../styles/JobListing.css';

const jobs = [
  {
    title: 'Frontend Developer',
    description: 'We need a skilled React developer...',
    salary: '$70,000 - $90,000',
    skills: ['JavaScript', 'React', 'CSS'],
    deadline: 'Next Month',
  },
  // Add more job objects here
];

function JobListings() {
  return (
    <div className="job-listings">
      {jobs.map((job, index) => (
        <JobPostCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobListings;
