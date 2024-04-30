import React from 'react';
import styled from 'styled-components';

import pa1 from './pa1.jpg';
import pa2 from './pa2.jpg';
import pa3 from './pa3.jpg';

import aa1 from './aa1.jpg';
import aa2 from './aa2.jpg';
import aa3 from './aa3.jpg';

import mal1 from './mal1.jpg';
import mal2 from './mal2.jpg';
import mal3 from './mal3.jpg';

import la1 from './la1.jpg';
import la2 from './la2.jpg';
import la3 from './la3.jpg';

import s1 from './s1.jpg';
import s2 from './s2.jpg';
import s3 from './s3.jpg';

import { Link } from 'react-router-dom';

const Star = styled.span`
  color: gold;
  font-size: 1.5rem;
`;

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i}>★</Star>);
  }

  if (halfStar) {
    stars.push(<Star key="half">★</Star>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={i + fullStars + (halfStar ? 1 : 0)}>☆</Star>);
  }

  return (
    <div>
      {stars}
      <span style={{ marginLeft: '0.5rem' }}>{rating.toFixed(1)}</span>
    </div>
  );
};

const HotelContainer = styled.div`
  background-color: #222;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: left;
  width: 1200px;
  height: 100vh;
  display:flex;
  flex-direction: column;
 
`;
const HotelImage = styled.img`
  width: 390px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 10px 10px 0;
`;

const PageTitle = styled.h1`
  font-size: 60px;
  color: black;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: white;
  margin-bottom: 15px;
  text-align: left;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }
`;
const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #065335;
  color: white;
  padding: 10px 10px;
  width:100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #030303;
  }
`;

const Udpresort = () => {
  const hotels = [
    {
        name: 'Paradise Isle Beach Resort',
        ratings: 4.8 ,
        address: '46, Malpe Beach, Udupi 576 108 India ',
        contact: '078478 00800' ,
        description: 'Paradise Isle Beach Resort is a secluded beachfront resort offering fun activities and lavish amenities for an unforgettable getaway with your loved ones.',
      imageUrls: [pa1,pa2,pa3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Aryan Hotel and Resort ',
        ratings: 4.5,
        address: ' Thonse West, Udupi | 12.0 km from city centre, Udupi.',
        contact: '07947144151',
        description: 'Nestled amidst stunning landscapes, the charming resort offers a jacuzzi, doctor on call, conference rooms and water slides. ',
      imageUrls: [aa1,aa2,aa3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Malpe Sea Front Cottage',
        ratings: 4,
        address: 'Malpe Beach, Udupi | 20 m from Malpe Beach',
        contact: ' +91 78-47-800-800',
        description: 'Situated on Malpe beach, the Malpe Sea Front Cottage is budget friendly, and offers you a refreshing, unadulterated holiday experience – one that’s free from the hustle and bustle of urbanisation. With its silver sands, breath-taking sunsets, cozy cottages, peaceful ambiance and all the time in the world, Malpe Sea Front Cottage is the ideal holiday destination for seaside lovers and adventure enthusiasts. ',
      imageUrls: [mal1,mal2,mal3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
     
        name: 'Paradise Lagoon',
        ratings: 3.5,
        address: 'Thonse West, Udupi | 14.3 km from city centre',
        contact: '  078478 00800',
        description: 'Overlooking the pristine backwaters, this luxurious property is the perfect retreat with stylish rooms, splendid restaurants, an Ayurvedic spa, lavish houseboats and upscale amenities.',
      imageUrls: [la1,la2,la3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Sea Bird Resort',
        ratings: 3,
        address: ' sea bird resort, Doddangudde, aatradi, Bellampalli, Karnataka 576107',
        contact: '+91 96325 31153',
        description: 'Sea Bird Resort - Udupi is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. ',
      imageUrls: [s3,s2,s1],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
      <BackButton to="/Options1">Back</BackButton>
      <PageTitle>Top 5 Resorts</PageTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {hotels.map((hotel, index) => (
          <HotelContainer key={index}>
            <SectionTitle>{hotel.name}</SectionTitle>
            <RatingStars rating={hotel.ratings} />
            <p>Address: {hotel.address}</p>
            <p>Contact: {hotel.contact}</p>
            <p>Description: {hotel.description}</p>
            <div>
              {hotel.imageUrls.map((imageUrl, i) => (
                <HotelImage key={i} src={imageUrl} alt={`Image ${i}`} />
              ))}
            </div>
            <a href={hotel.buttonLink} target="_blank" rel="noopener noreferrer">
              <Button>{hotel.buttonText}</Button>
            </a>
          </HotelContainer>
        ))}
      </div>
    </div>
  );
};

export default Udpresort;
