import React from "react";
import Banner from "./Banner/Banner.jsx";
import BookedSessions from "./BookedSessions/BookedSessions.jsx";
import SessionCard from "../../components/Cards/SessionCard.jsx";
import WhyTrustUs from "./WhyTrustUs/WhyTrustUs.jsx";
import MostPopularSessions from "./MostPopularSessions/MostPopularSessions.jsx";
import TopRatedTutors from "./TopRatedTutors/TopRatedTutors.jsx";

function HomePage(){

    return <div className="homepage">
        <Banner/>
        <BookedSessions/>
        <MostPopularSessions/>
        <WhyTrustUs/>
        <TopRatedTutors/> 
    </div>
}

export default HomePage;