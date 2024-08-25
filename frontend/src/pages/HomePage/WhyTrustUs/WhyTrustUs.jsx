import React from 'react';
import './WhyTrustUs.css';

function WhyTrustUs() {
  const points = [
    {
      icon: '🛡️',
      title: 'Validated Tutors',
      description: 'All our tutors are thoroughly validated and background-checked to ensure the highest quality.',
    },
    {
      icon: '🎓',
      title: 'Expert Knowledge',
      description: 'Our tutors are experts in their fields, bringing years of experience to their teaching sessions.',
    },
    {
      icon: '💡',
      title: 'Innovative Learning',
      description: 'We provide a platform for innovative learning with interactive sessions and engaging content.',
    },
  ];

  return (
    <div className="why-trust-us">
      <h2 className="section-title">Why Trust Us?</h2>
      <div className="trust-points">
        {points.map((point, index) => (
          <div key={index} className="trust-point">
            <div className="icon-container">
              <span className="trust-icon">{point.icon}</span>
            </div>
            <div className="trust-content">
              <h3 className="trust-title">{point.title}</h3>
              <p className="trust-description">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyTrustUs;
