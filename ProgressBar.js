import React from 'react';

function ProgressBar({ step }) {
  const percentage = (step / 3) * 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }} />
    </div>
  );
}

export default ProgressBar;
