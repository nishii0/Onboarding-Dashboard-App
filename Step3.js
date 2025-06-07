import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function Step3() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ theme: 'light', layout: 'grid' });

  const handleSubmit = () => {
    localStorage.setItem('step3', JSON.stringify(form));
    const allData = {
      ...JSON.parse(localStorage.getItem('step1')),
      ...JSON.parse(localStorage.getItem('step2')),
      ...form
    };
    localStorage.setItem('userData', JSON.stringify(allData));
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <ProgressBar step={3} />
      <h2>Preferences</h2>
      <select value={form.theme} onChange={(e) => setForm({ ...form, theme: e.target.value })}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select value={form.layout} onChange={(e) => setForm({ ...form, layout: e.target.value })}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>
      <div className="buttons">
        <button onClick={() => navigate('/onboarding/step2')}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Step3;
