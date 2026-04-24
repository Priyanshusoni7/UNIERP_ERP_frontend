import React from 'react';

const ResultsPage = () => {
  return (
    <div className="courses-page animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Exam Results</h1>
        <p className="page-subtitle">Academic Performance</p>
      </div>

      <div className="detail-card" style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--border-light)' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>🎓 Semester Results</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Your exam results will be published here once the evaluation process is complete.
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
