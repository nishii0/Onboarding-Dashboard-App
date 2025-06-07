import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function Step1() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleNext = () => {
    if (!form.name || !form.email) {
      alert('Please fill in all fields.');
      return;
    }
    localStorage.setItem('step1', JSON.stringify(form));
    navigate('/onboarding/step2');
  };

  return (
    <div className="container">
      <ProgressBar step={1} />
      <h2>Personal Info</h2>
      <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step1;
