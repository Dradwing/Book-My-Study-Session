import React from 'react';
import './BookedSessions.css';

function BookedSessions() {
  // Sample data for booked sessions
  const sessions = [
    {
      id: 1,
      image: 'path-to-session-image-1.jpg',
      name: 'Math Tutoring',
      subject: 'Mathematics',
      progress: 75, // percentage
    },
    {
      id: 2,
      image: 'path-to-session-image-2.jpg',
      name: 'Physics Revision',
      subject: 'Physics',
      progress: 50, // percentage
    },
    {
      id: 3,
      image: 'path-to-session-image-3.jpg',
      name: 'English Grammar',
      subject: 'English',
      progress: 90, // percentage
    },
    // Add more sessions as needed
  ];

  return (
    <div className="booked-sessions">
      <h2 className="section-title">Your Booked Sessions</h2>
      <div className="booked-sessions-row">
        {sessions.map((session) => (
          <div className="booked-session-card" key={session.id}>
            <img src="https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d" alt={session.name} className="booked-session-image" />
            <div className="booked-session-details">
              <h3 className="booked-session-name">{session.name}</h3>
              <p className="booked-session-subject">{session.subject}</p>
              <div className="progress-bar-background-homepage">
                <div className="progress-bar" style={{ width: `${session.progress}%` }}></div>
              </div>
              <p className="progress-text">{session.progress}% Completed</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <a href="#view-more" className="view-more-link">View More</a>
      </div>
    </div>
  );
}

export default BookedSessions;
