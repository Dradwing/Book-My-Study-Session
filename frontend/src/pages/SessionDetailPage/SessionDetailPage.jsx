import React,{useState,useEffect} from 'react';
import Essentials from './Essentials/Essentials';
import SessionFeatures from './SessionFeatures/SessionFeatures';
import TopicsCovered from './TopicsCovered/TopicsCovered';
import SessionDescription from './SessionDescription/SessionDescription';
import RatingsAndReviews from './RatingAndReviews/RatingsAndReviews';
import BookingDetails from './BookingDetails/BookingDetails';
import AllReviews from './AllReviews/AllReviews';
import axios from 'axios';

function SessionDetailPage(){

    const [isBookingOpen, setBookingOpen] = useState(false);
    const [isReviewsOpen, setReviewsOpen] = useState(false);

    const [session,setSession]=useState();

    // Set searchQuery based on URL query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initialSearchQuery = searchParams.get('sessionId');
    
    const fetchSession = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/v1/sessions/session/${initialSearchQuery}`);
          const data = response.data;
          console.log(JSON.stringify(data));
          setSession(data.data.session);
        } catch (error) {
          console.error('Error fetching sessions:', error);
        }
      };
  
      fetchSession();

  }, [location.search]);

    return <div className="session-detail-page">
        <Essentials/>
        <SessionFeatures/>
        <TopicsCovered/>
        <SessionDescription/>
        <RatingsAndReviews/>
        <BookingDetails isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
        <AllReviews  isOpen={isReviewsOpen} toggleDialog={() => setReviewsOpen(false)}/>

    </div>
}

export default SessionDetailPage;