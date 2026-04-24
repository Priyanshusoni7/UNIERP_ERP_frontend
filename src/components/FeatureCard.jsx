import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, linkTo, delay = 0 }) => {
  return (
    <Link 
      to={linkTo} 
      className={`feature-card animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="feature-icon-wrapper">
        {icon}
      </div>
      <div className="feature-content">
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{description}</div>
      </div>
    </Link>
  );
};

export default FeatureCard;
