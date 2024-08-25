import React from 'react';
import './TopRatedTutors.css';
import { FaStar, FaUsers, FaBook, FaRegCalendarCheck,FaStarHalfAlt } from 'react-icons/fa';
import { MdOutlineRateReview } from "react-icons/md";

function TopRatedTutors() {
  const tutors = [
    {
      name: 'John Doe',
      subject: 'Mathematics',
      starRating: 4.7,
      bookings: 120,
      reviews: 98,
      sessions: 150,
      slots:540,
      description: 'Expert in algebra, calculus, and geometry with 10 years of teaching experience.',
      image: 'https://img.freepik.com/premium-photo/portrait-handsome-man-standing-green-background_53419-7572.jpg',
    },
    {
      name: 'Jane Smith',
      subject: 'Physics',
      starRating: 4.9,
      bookings: 110,
      reviews: 85,
      sessions: 130,
      slots:390,
      description: 'Specializes in mechanics and electromagnetism, with 8 years of experience.',
      image: 'https://img.freepik.com/premium-photo/portrait-young-woman-wearing-glasses-standing-green-background_53419-7571.jpg',
    },
    {
      name: 'Michael Johnson',
      subject: 'Chemistry',
      starRating: 4.5,
      bookings: 140,
      reviews: 105,
      sessions: 160,
      slots:435,
      description: 'Organic chemistry expert with a passion for teaching students of all levels. Has intensive experience of teaching a unversity of California.',
      image: 'https://img.freepik.com/premium-photo/portrait-smiling-man-standing-with-arms-crossed-green-background_53419-7570.jpg',
    },
  ];

  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

    return (
      <>
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <FaStar key={index} style={{ color: 'gold' }} />;
          }
          if (index === fullStars && hasHalfStar) {
            return <FaStarHalfAlt key={index} style={{ color: 'gold' }} />;
          }
          return <FaStar key={index} style={{ color: '#ddd' }} />;
        })}
      </>
    );
  };

  return (
    <div className="top-rated-tutors">
      <h2>Meet Top Rated Tutors</h2>
      <div className="tutor-cards">
        {tutors.map((tutor, index) => (
          <div className="tutor-card" key={index}>
            <img className="tutor-image-card" src={tutor.image} alt={tutor.name} />
            <div className="tutor-info-card">
              <h3 className="tutor-name-card">{tutor.name}</h3>
              <p className="tutor-subject-card">Expert in {tutor.subject}</p>
              <div className="star-rating-card">
                <span style={{color:"#FFD43B",paddingRight:"5px",fontWeight:"bolder"}}>{tutor.starRating}</span>
                  {renderStars(tutor.starRating)}
                </div>
              <div className="tutor-stats-card">
                <div className="stat-item-tutor-card">
                <FaUsers/> {tutor.bookings} bookings
                </div>
                <div className="stat-item-tutor-card">
                <FaBook /> {tutor.sessions} study sessions
                </div>
                <div className="stat-item-tutor-card">
                  < MdOutlineRateReview />{tutor.reviews} reviews
                </div>
                <div className="stat-item-tutor-card">
                <FaRegCalendarCheck />  {tutor.slots} slots
                </div>
              </div>
              <p className="tutor-description">{tutor.description.length > 100 ? `${tutor.description.substring(0, 100)}...` : tutor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRatedTutors;