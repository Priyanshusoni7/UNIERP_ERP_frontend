import React, { useEffect, useState } from 'react';
import './StatCard.css';

const StatCard = ({ title, value, subtitle, icon, color = 'primary', isPercent = false, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
  const prefix = value.toString().replace(/[0-9.].*/g, '');
  const suffix = value.toString().replace(/.*[0-9.]/g, '');

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1500; // 1.5 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setDisplayValue(numericValue * easeOut);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(numericValue);
      }
    };

    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [numericValue, delay]);

  const formatValue = (val) => {
    // Format based on if it should have decimals
    const formattedNum = Number.isInteger(numericValue) ? Math.round(val) : val.toFixed(1);
    return `${prefix}${formattedNum}${suffix}`;
  };

  const colorStyles = {
    primary: { background: 'var(--primary-light)', color: 'var(--primary)' },
    success: { background: 'var(--success-light)', color: 'var(--success)' },
    warning: { background: 'var(--warning-light)', color: 'var(--warning)' },
    danger: { background: 'var(--danger-light)', color: 'var(--danger)' },
    info: { background: 'var(--info-light)', color: 'var(--info)' },
  };

  return (
    <div className={`stat-card animate-fade-in-up`} style={{ animationDelay: `${delay}s` }}>
      <div className="stat-icon-wrapper" style={colorStyles[color]}>
        {icon}
      </div>
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-value">
          {formatValue(displayValue)}
          {isPercent && '%'}
        </div>
        {subtitle && <div className="stat-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

export default StatCard;
