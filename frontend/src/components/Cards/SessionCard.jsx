import React from 'react';
import './SessionCard.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaSchoolFlag } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function SessionCard({ session, orientation = 'horizontal' }) {
  const getRatingLabel = (rating) => {
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 4) return 'Very Good';
    if (rating >= 3.5) return 'Good';
    return 'Average';
  };

  // Determine the appropriate class suffix based on orientation
  const suffix = orientation === 'vertical' ? 'vertical' : 'horizontal';

  return (
    <div className={`session-card session-card-${suffix}`}>
      <div className={`session-image-wrapper-${suffix}`}>
        <img src={session.image} alt={session.name} className={`session-image`} />
      </div>
      <div className={`session-card-content session-card-content-${suffix}`}>
        <h1 className={`session-card-name`}>{session.name}</h1>
        <div className={`session-card-info`}>
          <div className={`creator-card-duration`}>
            <div className={`creator-card-info`}>
              <img src={session.creatorImage} alt={session.creatorName} className={`creator-image-session-card`} />
              <span className={`creator-name-session-card`}>{session.creatorName}</span>
            </div>
            <div className={`session-card-duration session-card-duration-${suffix}`}>
           
              <span><FaCalendarAlt style={{ color: 'rgb(240,56,56)' }} /> Duration: {session.duration} days</span>
              <span><FaSchoolFlag style={{ color: 'rgb(240,56,56)' }} /> {session.class}th {session.subject}</span>
            </div>
          </div>
          <div className={`session-card-rating`}>
            <span className={`rating-label-session-card rating-label-session-card-${suffix}`}>{getRatingLabel(session.rating)}</span>
            <div className={`rating-box-and-bookings-session-card rating-box-and-bookings-session-card-${suffix}`}>
              <div className={`rating-box-session-card`}>
                <span className={`rating-value-session-card`}>{session.rating}</span>
              </div>
              <span className={`total-bookings-session-card`}>{session.totalBookings} Bookings</span>
            </div>
          </div>
        </div>
        <div className={`topic-tags-session-card topic-tags-session-card-${suffix}`}>
          {session.topics.map((topic, index) => (
            <span key={index} className={`tag-session-card`}>
              {topic.topicName}
            </span>
          ))}
        </div>
        <div className={`session-card-price-and-button`}>
          <div className={`session-card-price`}>
            <span>₹{session.price}</span>
          </div>
          <Link to={`/sessionDetails?sessionId=${session._id}`}><button className={`book-now-session-card`}>Book Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
