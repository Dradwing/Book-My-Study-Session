import React from 'react';
import './RatingsAndReviews.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingsAndReviews = () => {

  const ratingData = {
    overallRating: 4.7,
    totalReviews: 4119,
    breakdown: [
      { stars: 5, percentage: 75.7 },
      { stars: 4, percentage: 18.3 },
      { stars: 3, percentage: 3.9 },
      { stars: 2, percentage: 1.1 },
      { stars: 1, percentage: 1.0 },
    ],
  };
  

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

  // Calculate time ago for reviews
  const timeAgo = (date) => {
    const reviewDate = new Date(date);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - reviewDate);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="ratings-reviews-section">
      {/* Ratings Side */}
      <div className="ratings-side">
        <div className="overall-rating">
          <FaStar size={24} color="#f43838" />
          <span className="rating-value">{ratingData.overallRating}</span>
          <span className="total-reviews">{ratingData.totalReviews.toLocaleString()} reviews</span>
        </div>
        <div className="rating-breakdown">
          {ratingData.breakdown.map((item) => (
            <div key={item.stars} className="rating-bar">
              <span>{item.stars} stars</span>
              <div className="progress-bar-background">
                <div className="progress-bar" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <span>{item.percentage.toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Side */}
      <div className="reviews-side">
      {reviews.slice(0, 4).map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.studentImage} alt={review.studentName} className="student-image" />
            <div className="review-details">
              <div className="review-header">
                <span className="student-name">{review.studentName}</span>
                <span className="review-time">{timeAgo(review.date)}</span>
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
                {review.text.length > 100 ? (
                  <>
                    {review.text.substring(0, 100)}...
                    <span className="show-more" onClick={() => alert('Show more popup')}>Show more</span>
                  </>
                ) : (
                  review.text
                )}
              </p>
            </div>
          </div>
        ))}
        <div className="show-all-reviews" onClick={() => alert('Show all reviews popup')}>
          Show all reviews
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
