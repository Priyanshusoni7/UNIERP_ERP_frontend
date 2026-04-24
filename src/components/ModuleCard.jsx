import React from 'react';
import './ModuleCard.css';

const ModuleCard = ({ title, description, icon, type, url, delay = 0 }) => {
  const isDisabled = !url || url === '';

  const getGradientClass = () => {
    switch (type) {
      case 'classroom': return 'bg-gradient-classroom';
      case 'hiresphere': return 'bg-gradient-hiresphere';
      case 'codestate': return 'bg-gradient-codestate';
      default: return 'bg-gradient-codestate';
    }
  };

  const CardContent = () => (
    <>
      <div className={`module-card-bg ${getGradientClass()}`}></div>
      <div className="module-card-content">
        <div className="module-icon">{icon}</div>
        <div className="module-title">{title}</div>
        <div className="module-desc">{description}</div>
        <div className="module-action">
          {isDisabled ? 'Coming Soon' : 'Launch Module ↗'}
        </div>
      </div>
    </>
  );

  if (isDisabled) {
    return (
      <div 
        className={`module-card disabled animate-fade-in-up`}
        style={{ animationDelay: `${delay}s` }}
      >
        <CardContent />
      </div>
    );
  }

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`module-card animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent />
    </a>
  );
};

export default ModuleCard;
