// client/src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [role, setRole] = useState('');
  const [place, setPlace] = useState('');
  const [experience, setExperience] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/jobs/search', { role, place, experience });
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Job Search</h1>
      <div>
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
        <input type="text" placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} />
        <input type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            Role: {job.role}, Place: {job.place}, Experience: {job.experience} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
