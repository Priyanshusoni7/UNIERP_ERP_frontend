import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getCourses } from '../api/api';
import './CoursesPage.css';

const CoursesPage = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (!user || !user.userId) return;
        const res = await getCourses(user.userId);
        setCourses(res.data);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
        setError('Could not load courses at this time.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) {
    return (
      <div className="courses-page animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">My Courses</h1>
          <p className="page-subtitle">Loading your enrolled subjects...</p>
        </div>
        <div className="courses-grid">
          {[1, 2, 3, 4].map(i => <div key={i} className="skeleton-card"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">{user?.role === 'FACULTY' ? 'My Assigned Classes' : 'My Enrolled Courses'}</h1>
        <p className="page-subtitle">Current Academic Session</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      {!error && courses.length === 0 ? (
        <div className="courses-grid">
          <div className="no-courses">
            <h3>No courses found</h3>
            <p>You are not enrolled in any active courses for this semester.</p>
          </div>
        </div>
      ) : (
        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div 
              key={course.id} 
              className="course-card animate-fade-in-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="course-icon-wrapper">
                📚
              </div>
              <div className="course-subject">{course.subject}</div>
              <h3 className="course-name">{course.name}</h3>
              <div className="course-code">{course.classCode}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
