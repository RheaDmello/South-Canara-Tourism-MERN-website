import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';

import e from './e.jpg';
import f1 from './f1.jpg';
import g from './g.jpg';
import h1 from './h1.jpg';
import con1 from './con1.jpg';
import con2 from './con2.jpg';
import con3 from './con3.jpg';
import w1 from './w1.jpg';
import w2 from './w2.jpg';
import sam1 from './sam1.jpg';
import sam2 from './sam2.jpg';
import ess2 from './ess2.jpg';
import ess3 from './ess3.jpg';
import ud1 from './ud1.jpg';
import ud2 from './ud2.jpg';

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

const Udprestro = () => {
  const hotels = [
    {
      name: 'White Lotus',
      ratings: 4.8,
      address: 'Green Park Premier, Mosque Road, Udupi, 576101, Udupi, India',
      contact: '+91 8202531211',
      description: 'Situated in the heart of Udupi, White Lotus is a Boutique Hotel which offers exquisite rooms and choice of restaurants.',
      imageUrls: [e, w1,w2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
      name: 'Samanvay Boutique',
      ratings: 4.75,
      address: 'Near Govinda Kalyana Mantapa, 576101, Udupi, India',
      contact: '+91 9448011111',
      description: 'Samanvay Boutique Hotel is a perfect starting point from which to explore Udupi. Free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk, express check-in/check-out are just some of the facilities on offer.',
      imageUrls: [g,sam1,sam2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
      name: 'Country Inn & Suites by Radisson',
      ratings: 4.4,
      address: 'Address of Hotel B, Mangalore, Karnataka',
      contact: '+91 820 2701600',
      description: 'Savor the authentic flavors of Udupi at Country Inn & Suites. A true culinary experience awaits you! ',
      imageUrls: [con1,con2,con3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
      name: 'Essentia Manipal Inn',
      ratings: 4.35,
      address: 'NH-66 Near Karavali Junction UDUPI, 576103 Udupi, India',
      contact: '+918203500900',
      description: 'Guests at Essentia Manipal Inn can enjoy a buffet breakfast. The nearest airport is Mangalore International Airport, 55 km from the accommodation. At the hotel the rooms have a wardrobe and a private bathroom.',
      imageUrls: [h1,ess2,ess3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
      name: 'Udupi Residency',
      ratings: 3.75,
      address: 'Near Service Bus Stand, 576101, Udupi, India',
      contact: '+91(820)2530005',
      description: 'The Hotel Udupi Residency offers comfort and convenience whether you\'re on business or holiday in Udupi. Friendly staff, great facilities and close proximity to all that Udupi has to offer are three great reasons you should stay at Hotel Udupi Residency.',
      imageUrls: [f1,ud1,ud2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
        <BackButton to="/Options1">Back</BackButton>
      <PageTitle>Top 5 Restaurants</PageTitle>
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

export default Udprestro;