import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import machali from './machali.jpg';
import mc1 from './mc1.jpg';
import mc2 from './mc2.jpg';

import vil3 from './vil3.jpg';
import vil1 from './vil1.jpg';
import vil2 from './vil2.jpg';

import sagarratna from './sagarratna.jpg';
import sa1 from './sa1.jpg';
import sa2 from './sa2.jpg';

import narayana from './narayana.jpg';
import nar1 from './nar1.jpg';
import nar2 from './nar2.jpg';

import shettyl from './shettyl.jpg';
import she1 from './she1.jpg';
import she2 from './she2.jpg';

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
const Mnglrrestro = () => {
  const hotels = [
    {
        name: 'Machali',
        ratings: 4.75,
        address: "Behind Ocean Pearl, Sharada Vidyalaya Rd, Kodailbail, Mangaluru, Karnataka 575003",
        contact: '077959 57575',
        description: 'Uncomplicated restaurant serving a range of seafood specials such as prawn masala fry',
        imageUrls: [machali,mc1,mc2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Village Restaurant',
        ratings: 4.7,
        address: "Airport Rd, Yeyyadi, Mangaluru, Karnataka 575008",
        contact: '+91 89515 85885',
        description: 'Mangalorean-themed restaurant serving global dishes & seafood in rustic digs with a thatched roof',
        imageUrls: [vil3,vil1,vil2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Sagar Ratna Restaurant',
        ratings: 4.65,
        address: "THE OCEAN PEARL INN, VRQR+RGC, Kapikad, Mangaluru, Karnataka 575003",
        contact: '+91 824 241 3800',
        description: "Sagar Ratna serves authentic South Indian, North Indian and Chinese that is purely vegetarian in nature. Having won multiple awards over the years for its palatable food, Sagar Ratna continues to be the most visited restaurant across India",
        imageUrls: [sagarratna,sa1,sa2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Hotel Narayana',
        ratings: 4.6,
        address: 'MPT Road, behind Indian Overseas Bank, Bunder, Mangaluru, Karnataka 575001',
        contact: '094482 55025',
        description:'Savor the authentic flavors of Mangaluru at Hotel Narayana. A true culinary experience awaits you! ',
        imageUrls: [narayana,nar1,nar2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Shetty Lunch Home',
        ratings: 4.5,
        address: 'Door#14-3-308/7, Balmatta Rd, near Hotel Usha, Mangaluru, Karnataka 575001',
        contact: '099456 18222',
        description: 'Classic coastal cuisine & biryani dishes from Mangalore, with some outdoor seating',
        imageUrls: [shettyl,she1,she2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    }
  ];


  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
       <BackButton to="/Options2">Back</BackButton>
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

export default Mnglrrestro;
