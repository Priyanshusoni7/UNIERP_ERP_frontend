import React from 'react';

const PlaceholderPage = ({ title, icon }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border)',
      textAlign: 'center',
      padding: '40px'
    }} className="animate-fade-in">
      <div style={{
        fontSize: '64px',
        marginBottom: '24px',
        background: 'var(--bg-content)',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <h2 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '12px' }}>
        {title}
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: '1.6' }}>
        This module is currently under development. The backend APIs and detailed UI for this section will be implemented in a future phase.
      </p>
      <button 
        style={{
          marginTop: '24px',
          padding: '10px 20px',
          background: 'var(--primary-light)',
          color: 'var(--primary)',
          borderRadius: 'var(--radius-md)',
          fontWeight: '600',
          cursor: 'pointer'
        }}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default PlaceholderPage;
