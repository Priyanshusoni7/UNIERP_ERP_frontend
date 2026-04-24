import React from 'react';

const AttendancePage = () => {
  const attendanceData = [
    { subject: 'Database Management', percentage: 85, total: 40, attended: 34, color: 'success' },
    { subject: 'Data Structures', percentage: 72, total: 45, attended: 32, color: 'warning' },
    { subject: 'Operating Systems', percentage: 92, total: 38, attended: 35, color: 'success' },
    { subject: 'Computer Networks', percentage: 68, total: 42, attended: 28, color: 'danger' },
  ];

  return (
    <div className="courses-page animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Attendance Overview</h1>
        <p className="page-subtitle">Semester Attendance Record</p>
      </div>

      <div className="profile-details-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {attendanceData.map((record, idx) => (
          <div key={idx} className="detail-card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="course-name" style={{ marginBottom: '0.25rem' }}>{record.subject}</div>
              <div className="detail-label" style={{ marginBottom: 0 }}>
                {record.attended} / {record.total} Classes Attended
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: `var(--${record.color}-color, var(--primary-color))` }}>
                {record.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;
