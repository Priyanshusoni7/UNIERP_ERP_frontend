import React from 'react';

const TimetablePage = () => {
  return (
    <div className="courses-page animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Class Timetable</h1>
        <p className="page-subtitle">Weekly Schedule</p>
      </div>

      <div className="detail-card" style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--border-light)' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>📅 Timetable generated from ERP</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Your active timetable will be displayed here in a weekly calendar view. 
          Currently syncing with the administrative scheduling system...
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <div className="skeleton-card" style={{ width: '150px', height: '100px' }}></div>
          <div className="skeleton-card" style={{ width: '150px', height: '100px' }}></div>
          <div className="skeleton-card" style={{ width: '150px', height: '100px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
