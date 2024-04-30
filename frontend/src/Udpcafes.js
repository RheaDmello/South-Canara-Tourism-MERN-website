import React from 'react';
import styled from 'styled-components';

import grub from './grub.jpg';
import gr1 from './gr1.jpg';
import gr2 from './gr2.jpg';

import grill from './grill.jpg';
import grill1 from './grill1.jpg';
import grill2 from './grill2.jpg';

import planet from './planet.jpg';
import pl1 from './pl1.jpg';
import pl2 from './pl2.jpg';

import siro from './siro.jpg';
import sc1 from './sc1.jpg';
import sc2 from './sc2.jpg';

import cosmo from './cosmo.jpg';
import cos1 from './cos1.jpg';
import cos2 from './cos2.jpg';
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

const Udpcafes = () => {
  const hotels = [
    {
        name: 'Grub Monkeys ',
            ratings: 4.5 ,
            address: ' Dr VS Acharya Rd, Vidyaratna Nagar, Manipal, Karnataka 576104',
            contact: '088928 58915' ,
            description: 'Grub Monkeys is a F&B-Casual Dining outlet that offers a unique dining experience. The restaurant serves a variety of dishes from around the world, including Indian, Chinese, Italian, Mexican, and American cuisines. The menu features a wide selection of appetizers, entrees, desserts, and drinks.',
        imageUrls: [grub,gr1,gr2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Grill Stories ',
            ratings: 4.4,
            address: '  Shambhavi Soverign Building, NR Country Inn Hotel, Vidyaratna Nagar, Manipal',
            contact: '083695 64812',
            description: '  It is a cozy cafe and sets the mood for fun conversations. Though their specialty is Lebanese and Arabian, they also serve Indian and Chinese.',
        imageUrls: [grill,grill1,grill2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
  
    {
        name: 'Planet Cafe',
        ratings: 4,
        address: 'Premier Court Blue Waters East point Road, Manipal',
        contact: '0820 257 2454',
        description: 'Planet Cafe is a great place for spontaneous eating because it’s easy on the pocket and apt for hanging out with friends and family. Also, it is believed by the regular visitors that it is the ideal place for a hangover cure! So, don’t forget to head to this cafe the morning after a wild night! ',
        imageUrls: [planet,pl1,pl2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Scirocco Coffee Valley',
        ratings: 3.9,
        address: ' Opposite Madhav Park, Eshwar Nagar, Manipal',
        contact: '  090082 32259',
        description: 'Scirocco is one of the few Udupi cafes that serves authentic Italian food and their pastas have the right amount of sauce with good balance in spices.',
        imageUrls: [siro,sc1,sc2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'The Cosmo Cafe',
            ratings: 3.6,
            address: 'Fortune Inn Valley View, Manipal Main Road, Eshwar Nagar',
            contact: '080 2235 2828',
            description: "Great ambience and spacious seating options (both indoor and outdoor). Excellent food quality, not too spicy or heavy ",
        imageUrls: [cosmo,cos1,cos2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
      <BackButton to="/Options1">Back</BackButton>
      <PageTitle>Top 5 Cafes</PageTitle>
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

export default Udpcafes;

