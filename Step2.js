import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function Step2() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ company: '', industry: '', size: '' });

  const handleNext = () => {
    if (!form.company || !form.industry || !form.size) {
      alert('All fields are required.');
      return;
    }
    localStorage.setItem('step2', JSON.stringify(form));
    navigate('/onboarding/step3');
  };

  return (
    <div className="container">
      <ProgressBar step={2} />
      <h2>Business Info</h2>
      <input type="text" placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
      <input type="text" placeholder="Industry" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} />
      <input type="text" placeholder="Company Size" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} />
      <div className="buttons">
        <button onClick={() => navigate('/onboarding/step1')}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Step2;
