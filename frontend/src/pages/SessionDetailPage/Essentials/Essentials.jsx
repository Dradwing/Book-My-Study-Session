import React from 'react';
import './Essentials.css';
import { FaCalendarAlt, FaStar, FaStarHalfAlt,FaLanguage } from 'react-icons/fa';
import { FaSchoolFlag } from "react-icons/fa6";

function Essentials() {

    const session = {
        name: 'Advanced React JS for Beginners',
        image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'John Doe',
        lastUpdate: '2024-09-20',
        language: 'English',
        duration: 12 ,
        price: 1500,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        rating: 4.5,
        totalBookings: 1642,
        topics:['Organic Chemistry','Aldehyde', 'Ketone', 'HydroCarbons','Carbohydrate'],
        expertise:'Organic Chemistry',
        class:12,
        subject:'Chemistry'
    };
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
    <div className="session-detail-container">
      <div className="session-detail-essential">
        <div className="video-preview">
          <iframe
            width="100%"
            height="100%"
            src={session.videoUrl}
            title="Session Video Preview"
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="session-details-container">
      <div className="session-header">
        <h2 className="session-name">{session.name}</h2>
        <img src={session.videoPreview || session.image} alt={session.name} className="session-preview" />
      </div>
      
      <div className="session-content">
        <div className="tutor-info">
          <img src={session.creatorImage} alt={session.creatorName} className="tutor-image" />
          <div className="tutor-details">
            <span className="tutor-name">{session.creatorName}</span>
            <p className="tutor-bio">Expert in {session.expertise}</p>
          </div>
        </div>

        <div className="session-meta">
          <div className="meta-item">
            <FaLanguage style={{ color: "rgb(240, 56, 56)" }} />
            <p>Language: {session.language}</p>
          </div>
          <div className='meta-item'>
            <FaSchoolFlag style={{color: "rgb(240, 56, 56)" }}/> <p>{session.class}th {session.subject}</p>
            </div>
          <div className="meta-item">
            <FaCalendarAlt style={{ color: "rgb(240, 56, 56)" }} />
            <p>Duration: {session.duration} days</p>
          </div>
        </div>

        <div className="topics">
            {session.topics.map((topic, index) => (
              <span key={index} className="tag">
                {topic}
              </span>
            ))}
          </div>

        <div className="session-price-rating">
          <div className="price-info">
            <p className="session-price">Price: ₹{session.price}</p>
          </div>
          <div className="rating-info">
            <div className="session-rating">
              <span className="rating-value">{session.rating}</span>
              {renderStars(session.rating)}
              <span className="booking-info">({session.totalBookings} bookings)</span>
            </div>
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Essentials;
