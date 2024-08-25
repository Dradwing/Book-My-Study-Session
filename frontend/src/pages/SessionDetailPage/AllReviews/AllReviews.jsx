import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './AllReviews.css';

function AllReviews({ isOpen, toggleDialog }) {
  const [loadedReviews, setLoadedReviews] = useState(10);

   
  const rating=4.7;
  const totalReviews=5;
  const reviews = [
    {
      studentImage: 'https://via.placeholder.com/40', // Placeholder image URL
      studentName: 'John Doe',
      rating: 5,
      date: '2022-08-10',
      text: 'This session was amazing! The tutor was very knowledgeable and explained everything clearly. I highly recommend it to anyone looking to learn more about this subject.',
    },
    {
      studentImage: 'https://via.placeholder.com/40', // Placeholder image URL
      studentName: 'Jane Smith',
      rating: 4,
      date: '2023-03-15',
      text: 'Great session with lots of valuable information. The only downside was the pace, which was a bit fast for me. However, the tutor was very responsive to questions.',
    },
    {
      studentImage: 'https://via.placeholder.com/40', // Placeholder image URL
      studentName: 'Alex Johnson',
      rating: 5,
      date: '2021-11-22',
      text: 'Fantastic experience! I learned so much and the practice tests were very helpful in solidifying my understanding.',
    },
    {
      studentImage: 'https://via.placeholder.com/40', // Placeholder image URL
      studentName: 'Emily Davis',
      rating: 3,
      date: '2024-01-05',
      text: 'The session was good overall, but I felt that some topics were rushed. More time should have been spent on the basics.',
    },
    {
      studentImage: 'https://via.placeholder.com/40', // Placeholder image URL
      studentName: 'Michael Brown',
      rating: 4,
      date: '2022-06-30',
      text: 'Very informative session with practical examples. The tutor was engaging and kept the session interesting. Would attend again!',
    },
  ];

  const loadMoreReviews = () => {
    setLoadedReviews((prevLoadedReviews) => prevLoadedReviews + 10);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'dialog-overlay') {
      toggleDialog();
    }
  };

  const calculateTimeAgo = (date) => {
    const currentDate = new Date();
    const reviewDate = new Date(date);
    const differenceInMonths =
      (currentDate.getFullYear() - reviewDate.getFullYear()) * 12 +
      (currentDate.getMonth() - reviewDate.getMonth());

    if (differenceInMonths < 12) {
      return `${differenceInMonths} month${differenceInMonths !== 1 ? 's' : ''} ago`;
    }

    const differenceInYears = Math.floor(differenceInMonths / 12);
    return `${differenceInYears} year${differenceInYears !== 1 ? 's' : ''} ago`;
  };

    // Function to display stars based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
        return (
          <>
            {[...Array(fullStars)].map((_, index) => (
              <FaStar key={`full-${index}`} color="#f43838" />
            ))}
            {halfStar && <FaStarHalfAlt color="#f43838" />}
            {[...Array(emptyStars)].map((_, index) => (
              <FaRegStar key={`empty-${index}`} color="#f43838" />
            ))}
          </>
        );
      };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={handleOutsideClick}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <div className="all-reviews-header">
            <div className="all-reviews-rating">
              {renderStars(rating)}
              <span className="rating-number">{rating.toFixed(1)}</span>
            </div>
            <span className="total-reviews">({totalReviews} Reviews)</span>
          </div>
          <button className="close-button" onClick={toggleDialog}>
            &times;
          </button>
        </div>
        <div className="dialog-content">
        {reviews.slice(0, 4).map((review, index) => (
          <div key={index} className="review-card" style={{marginBottom:"10px"}}>
            <img src={review.studentImage} alt={review.studentName} className="student-image" />
            <div className="review-details">
              <div className="review-header">
                <span className="student-name">{review.studentName}</span>
                <span className="review-time">{calculateTimeAgo(review.date)}</span>
              </div>
              <div className="student-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? 'filled-star' : 'empty-star'}
                  />
                ))}
              </div>
              <p className="review-text">
                {review.text}
              </p>
            </div>
          </div>
        ))}
          {loadedReviews < reviews.length && (
            <button className="load-more-button" onClick={loadMoreReviews}>
              Show More Reviews
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

AllReviews.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      userImage: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  rating: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
};

export default AllReviews;
