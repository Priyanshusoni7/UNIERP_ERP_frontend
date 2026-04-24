import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const mainLinks = [
    { path: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { path: '/courses', icon: '📚', label: 'My Courses' },
    { path: '/attendance', icon: '📋', label: 'Attendance' },
    { path: '/timetable', icon: '🕐', label: 'Timetable' },
  ];

  const academicLinks = [
    { path: '/fees', icon: '💰', label: 'Fees' },
    { path: '/results', icon: '📝', label: 'Exam Results' },
    { path: '/profile', icon: '👤', label: 'My Profile' },
  ];

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const formatRole = (role) => {
    if (!role) return '';
    return role.toLowerCase().replace(/_/g, ' ');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">U</div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-title">UNI-ERP</span>
            <span className="sidebar-logo-subtitle">Dashboard</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-title">Main Menu</div>
        {mainLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-link-text">{link.label}</span>
          </NavLink>
        ))}

        <div className="sidebar-section-title">Academic</div>
        {academicLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-link-text">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">
            {user ? getInitials(user.name || user.email) : 'U'}
          </div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">{user?.name || user?.email || 'User'}</div>
            <div className="sidebar-user-role">{formatRole(user?.role)}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
