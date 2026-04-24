import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../api/api';
import './Topbar.css';

const Topbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getPageName = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/courses') return 'My Courses';
    if (path === '/attendance') return 'Attendance';
    if (path === '/timetable') return 'Timetable';
    if (path === '/fees') return 'Fees';
    if (path === '/results') return 'Exam Results';
    if (path === '/profile') return 'My Profile';
    return 'Home';
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Force logout on frontend anyway
      logout();
      navigate('/');
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-breadcrumb animate-fade-in stagger-1">
          <span>Home</span>
          <span>/</span>
          <span className="topbar-breadcrumb-current">{getPageName()}</span>
        </div>
      </div>

      <div className="topbar-right animate-fade-in stagger-2">
        <button className="topbar-btn" aria-label="Search">
          🔍
        </button>
        <button className="topbar-btn" aria-label="Notifications">
          🔔
          <span className="topbar-notification-dot"></span>
        </button>
        
        <div className="topbar-divider"></div>
        
        <button onClick={handleLogout} className="topbar-logout-btn" aria-label="Logout">
          🚪 Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
