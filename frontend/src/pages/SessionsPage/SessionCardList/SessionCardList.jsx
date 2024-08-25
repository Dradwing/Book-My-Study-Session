import React from 'react';
import SessionCard from "../../../components/Cards/SessionCard.jsx";
import './SessionCardList.css';

function SessionCardList({sessions}) {

    // const sessions=[
    //     {
    //         image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
    //         name: 'Build Your Organic Chemistry',
    //         subject: 'Chemistry',
    //         creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
    //         creatorName: 'Micky Mouse',
    //         duration: 12,
    //         tags:['Aldehyde and Ketone','HydroCarbons','Alcohols'],
    //         rating: 4.3,
    //         price: 700,
    //         totalBookings: 2478,
    //         class:12,
    //         Subject:'Chemistry'
    //       },
    //       {
    //         image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
    //         name: 'Build Your Organic Chemistry',
    //         subject: 'Chemistry',
    //         creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
    //         creatorName: 'Micky Mouse',
    //         duration: 12,
    //         tags:['Aldehyde and Ketone','HydroCarbons','Alcohols'],
    //         rating: 4.3,
    //         price: 700,
    //         totalBookings: 2478,
    //         class:12,
    //         Subject:'Chemistry'
    //       },
    //       {
    //         image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
    //         name: 'Build Your Organic Chemistry',
    //         subject: 'Chemistry',
    //         creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
    //         creatorName: 'Micky Mouse',
    //         duration: 12,
    //         tags:['Aldehyde and Ketone','HydroCarbons','Alcohols'],
    //         rating: 4.3,
    //         price: 700,
    //         totalBookings: 2478,
    //         class:12,
    //         Subject:'Chemistry'
    //       },
    //       {
    //         image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
    //         name: 'Build Your Organic Chemistry',
    //         subject: 'Chemistry',
    //         creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
    //         creatorName: 'Micky Mouse',
    //         duration: 12,
    //         tags:['Aldehyde and Ketone','HydroCarbons','Alcohols'],
    //         rating: 4.3,
    //         price: 700,
    //         totalBookings: 2478,
    //         class:12,
    //         Subject:'Chemistry'
    //       },
    //       {
    //         image: 'https://img.freepik.com/free-photo/tulips-laptop-cactus-stationeries-with-smartphone-red-background_23-2147923409.jpg?w=900&t=st=1724323640~exp=1724324240~hmac=a4f40176e1aea1cebca4688f0cb0ba7c362fc1d2e80653123f31a8116933f82d',
    //         name: 'Build Your Organic Chemistry',
    //         subject: 'Chemistry',
    //         creatorImage: 'https://c4.wallpaperflare.com/wallpaper/151/1012/978/red-background-cartoon-minimalism-animation-hd-wallpaper-preview.jpg',
    //         creatorName: 'Micky Mouse',
    //         duration: 12,
    //         tags:['Aldehyde and Ketone','HydroCarbons','Alcohols'],
    //         rating: 4.3,
    //         price: 700,
    //         totalBookings: 2478,
    //         class:12,
    //         Subject:'Chemistry'
    //       },

          
    // ]
  return (
    <div className="session-card-list">
      {sessions.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
}

export default SessionCardList;
