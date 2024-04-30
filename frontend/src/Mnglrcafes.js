import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import brott from './brott.jpg';
import br1 from './br1.jpg';
import br2 from './br2.jpg';

import stairway from './stairway.jpg';
import sta1 from './sta1.jpg';
import sta2 from './sta2.jpg';


import mcafee from './mcafee.jpg';
import tc from './tc.jpg';
import tc1 from './tc1.jpg';

import kh1 from './kh1.jpg';
import kh2 from './kh2.jpg';
import kh3 from './kh3.jpg';


import choco from './choco.jpg';
import bro1 from './bro1.jpg';
import bro2 from './bro2.jpg';

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

const Mnglrcafes = () => {
  const hotels = [
    {
       name: 'Brio Cafe and Grill',
            ratings: 4.8,
            address: "Balmatta Junction, Near Collector's Gate, Mangaluru, Karnataka 575002",
            contact: '0824 241 0601',
            description: "Extensive Continental & Italian cuisine in a lush restaurant in a hotel setting.",
      imageUrls: [mcafee,br1,br2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
      name: 'The Stairway Bakery & Cafe',
            ratings: 4.7,
            address:  'The Avatar Hotel Shanker Vittal HQ, Nandigudda Rd, Attavar, Mangaluru, Karnataka 575001',
            contact: ' 087920 52888',
            description: 'The Stairway - Bakery & Cafe is a vibrant cafe with artisanal breads, desserts, coffee and a Stairway stage for community events',
      imageUrls: [stairway,sta1,sta2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
      name: 'The Coffee House',
            ratings: 4.65,
            address: 'D.No.05-05-279/38, UG7B, UG31 & UG32, Upper Ground Floor, Empire Mall, MG Rd, Kodailbail, Mangaluru, Karnataka 575003',
            contact: '0824 428 5558',
            description: '',
      imageUrls: [choco,tc,tc1],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
       name: 'The Kaffeine Hub',
            ratings: 4.6,
            address: 'Bus Stop, Empire Mall, MG Rd, Kodailbail, Mangaluru, Karnataka 575003',
            contact: '7975087567',
            description:'',
      imageUrls: [kh1,kh2,kh3],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
       name: 'Brott Cafe',
            ratings: 4.45,
            address: '23-9-633/4(7) Yenmark Emerald, Monkey Stand New Rd, Marnamikatte, Mangaluru, Karnataka 575001 ',
            contact: '096866 55055',
            description: '',
      imageUrls:[brott,bro1,bro2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
           <BackButton to="/Options2">Back</BackButton>
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

export default Mnglrcafes;

