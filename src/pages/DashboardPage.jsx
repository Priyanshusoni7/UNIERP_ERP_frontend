import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProfile, getQuickLinks } from '../api/api';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';
import ModuleCard from '../components/ModuleCard';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [quickLinks, setQuickLinks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        if (!user || !user.userId) return;
        
        const [profileRes, linksRes] = await Promise.all([
          getProfile(user.userId),
          getQuickLinks(user.userId)
        ]);
        
        setProfile(profileRes.data);
        setQuickLinks(linksRes.data);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="welcome-section">
          <div className="skeleton skeleton-text"></div>
          <div className="welcome-badges">
            <div className="skeleton skeleton-badge"></div>
            <div className="skeleton skeleton-badge"></div>
            <div className="skeleton skeleton-badge"></div>
          </div>
        </div>
      </div>
    );
  }

  // Feature cards configuration
  const features = [
    { title: 'My Courses', desc: 'View enrolled subjects and syllabus', icon: '📚', link: '/courses' },
    { title: 'Attendance', desc: 'Track your daily attendance status', icon: '📋', link: '/attendance' },
    { title: 'Timetable', desc: 'Weekly schedule and class timings', icon: '🕐', link: '/timetable' },
    { title: 'Fees', desc: 'Pending dues and payment history', icon: '💰', link: '/fees' },
    { title: 'Exam Results', desc: 'Semester-wise academic performance', icon: '📝', link: '/results' },
    { title: 'My Profile', desc: 'Update personal information', icon: '👤', link: '/profile' }
  ];

  return (
    <div className="dashboard-page animate-fade-in">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 className="welcome-greeting">
          Welcome back, <span className="welcome-greeting-name">{profile?.name?.split(' ')[0] || user?.name || 'Student'}</span> 👋
        </h1>
        <div className="welcome-badges">
          {profile?.enrollment && (
            <span className="welcome-badge">
              🆔 {profile.enrollment}
            </span>
          )}
          {profile?.department && (
            <span className="welcome-badge">
              🏛️ {profile.department}
            </span>
          )}
          {profile?.program && (
            <span className="welcome-badge">
              🎓 {profile.program}
            </span>
          )}
          {profile?.semester && (
            <span className="welcome-badge">
              📅 Semester {profile.semester}
            </span>
          )}
          <span className="welcome-badge" style={{ textTransform: 'capitalize' }}>
            🔑 Role: {user?.role?.toLowerCase().replace('_', ' ')}
          </span>
        </div>
      </section>

      {/* Stats Section (Mock Data for visual fidelity) */}
      <section>
        <div className="stats-grid">
          <StatCard title="Attendance" value={85} subtitle="Current Semester" icon="📈" color="success" isPercent={true} delay={0.1} />
          <StatCard title="Current CGPA" value={8.5} subtitle="Till Last Semester" icon="🎯" color="primary" delay={0.2} />
          <StatCard title="Pending Fees" value="₹12500" subtitle="Due in 15 days" icon="💳" color="warning" delay={0.3} />
          <StatCard title="Upcoming Exams" value={3} subtitle="Mid-terms" icon="⏰" color="info" delay={0.4} />
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="section-header">
          <h2 className="section-title">Quick Actions</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.desc}
              icon={feature.icon}
              linkTo={feature.link}
              delay={0.1 + (idx * 0.05)}
            />
          ))}
        </div>
      </section>

      {/* External Modules Section */}
      <section>
        <div className="section-header">
          <h2 className="section-title">University Ecosystem</h2>
        </div>
        <div className="modules-grid">
          <ModuleCard 
            title="Classroom"
            description="Access your courses, submit assignments, and interact with faculty in real-time."
            icon="🎓"
            type="classroom"
            url={quickLinks?.classroomUrl}
            delay={0.4}
          />
          <ModuleCard 
            title="HireSphere"
            description="Explore job opportunities, apply for campus placements, and get hired."
            icon="💼"
            type="hiresphere"
            url={quickLinks?.hireSphereUrl}
            delay={0.5}
          />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
