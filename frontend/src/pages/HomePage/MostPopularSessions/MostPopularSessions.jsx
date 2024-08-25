import React from 'react';
import './MostPopularSessions.css';
import SessionCard from '../../../components/Cards/SessionCard';

function MostPopularSessions() {
  const sessions = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        name: 'Build Your Organic Chemistry',
        subject: 'Chemistry',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'Micky Mouse',
        duration: 12,
        topics:[{topicName:"Aldehyde"},{topicName:"Ketone"},{topicName:"Hydrocarbons"}],
        rating: 4.3,
        price: 700,
        totalBookings: 2478,
        class: 12,
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        name: 'Build Your Organic Chemistry',
        subject: 'Chemistry',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'Micky Mouse',
        duration: 12,
        topics:[{topicName:"Aldehyde"},{topicName:"Ketone"},{topicName:"Hydrocarbons"}],
        rating: 4.3,
        price: 700,
        totalBookings: 2478,
        class: 12,
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        name: 'Build Your Organic Chemistry',
        subject: 'Chemistry',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'Micky Mouse',
        duration: 12,
        topics:[{topicName:"Aldehyde"},{topicName:"Ketone"},{topicName:"Hydrocarbons"}],
        rating: 4.3,
        price: 700,
        totalBookings: 2478,
        class: 12,
    },
    {
      id: 4,
      image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        name: 'Build Your Organic Chemistry',
        subject: 'Chemistry',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'Micky Mouse',
        duration: 12,
        topics:[{topicName:"Aldehyde"},{topicName:"Ketone"},{topicName:"Hydrocarbons"}],
        rating: 4.3,
        price: 700,
        totalBookings: 2478,
        class: 12,
    },
    {
      id: 5,
      image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        name: 'Build Your Organic Chemistry',
        subject: 'Chemistry',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'Micky Mouse',
        duration: 12,
        topics:[{topicName:"Aldehyde"},{topicName:"Ketone"},{topicName:"Hydrocarbons"}],
        rating: 4.3,
        price: 700,
        totalBookings: 2478,
        class: 12,
    },
    {
      id: 6,
        image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
        name: 'Build Your Organic Chemistry',
        subject: 'Chemistry',
        creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
        creatorName: 'Micky Mouse',
        duration: 12,
        topics:[{topicName:"Aldehyde"},{topicName:"Ketone"},{topicName:"Hydrocarbons"}],
        rating: 4.3,
        price: 700,
        totalBookings: 2478,
        class: 12,
    },
  ];

  return (
    <div className="most-popular-study-sessions">
      <h2>Most Popular Study Sessions</h2>
      <div className="session-cards">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} orientation='vertical' />
        ))}
      </div>
    </div>
  );
}

export default MostPopularSessions;
