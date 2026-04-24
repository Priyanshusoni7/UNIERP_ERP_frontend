import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProfile } from '../api/api';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user || !user.userId) return;
        const res = await getProfile(user.userId);
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  if (loading) {
    return <div className="profile-page"><div className="skeleton-card" style={{height: '400px'}}></div></div>;
  }

  return (
    <div className="profile-page animate-fade-in">
      <div className="profile-header">
        <div className="profile-avatar">
          {profile?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
        </div>
        <div className="profile-title">
          <h1>{profile?.name || user?.email}</h1>
          <p>{user?.role?.replace('_', ' ')} | {user?.email}</p>
        </div>
      </div>

      <div className="profile-details-grid">
        <div className="detail-card">
          <span className="detail-label">ID / Enrollment</span>
          <span className="detail-value">{profile?.enrollment || 'N/A'}</span>
        </div>
        <div className="detail-card">
          <span className="detail-label">Department</span>
          <span className="detail-value">{profile?.department || 'N/A'}</span>
        </div>
        <div className="detail-card">
          <span className="detail-label">Program</span>
          <span className="detail-value">{profile?.program || 'N/A'}</span>
        </div>
        <div className="detail-card">
          <span className="detail-label">Current Semester</span>
          <span className="detail-value">{profile?.semester || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
