import React from 'react';
import './SessionFeatures.css';
import { FaChalkboardTeacher, FaFileAlt, FaLaptop, FaComments,FaComment, FaClock, FaVideo, FaListAlt, FaPencilAlt, FaMarker, FaThumbsUp, FaPeopleCarry,FaUsers } from 'react-icons/fa';

function SessionFeatures() {
  
    const features = [
        { name: "Live 1:1 Tutoring" },
        { name: "Notes" },
        { name: "Practice Tests" },
        { name: "Doubt-Chat Support" },
        { name: "Flexible Timings" },
        { name: "Session Recordings" },
        { name: "Discussion Forums" },
        {name: 'Group Discussions'},
        {name: 'Materials List'},
        {name: 'Writing Prompts'},
        {name: 'Virtual Whiteboard'},
        {name: 'Feedback Sessions'},
        {name: 'Group Projects'}
    ];

  // Icons for each feature
const featureIcons = {
  "Live 1:1 Tutoring": <FaChalkboardTeacher className="feature-icon" />,
  "Notes": <FaFileAlt className="feature-icon" />,
  "Practice Tests": <FaLaptop className="feature-icon" />,
  "Doubt-Chat Support": <FaComments className="feature-icon" />,
  "Flexible Timings": <FaClock className="feature-icon" />,
  "Session Recordings": <FaVideo className="feature-icon" />,
  "Materials List": <FaListAlt className="feature-icon" />,
  "Writing Prompts": <FaPencilAlt className="feature-icon" />,
  "Discussion Forums": <FaComment className="feature-icon" />,
  "Virtual Whiteboard": <FaMarker className="feature-icon" />,
  "Group Discussions": <FaUsers className="feature-icon" />,
  "Feedback Sessions": <FaThumbsUp className="feature-icon" />,
  "Group Projects": <FaPeopleCarry className="feature-icon" />,
};

  return (
    <div className="session-features-container">
      <h2 className="features-heading">Session Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            {featureIcons[feature.name]}
            <span className="feature-name">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionFeatures;
