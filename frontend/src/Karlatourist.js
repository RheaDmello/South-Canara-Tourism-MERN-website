import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import law3 from './law3.jpg';
import law1 from './law1.jpg';
import law2 from './law2.jpg';

import go from './go.jpg';
import go1 from './go1.jpg';
import goo from './goo.jpg';

import cb from './cb.jpg';
import cb1 from './cb1.jpg';
import cb2 from './cb2.jpg';


import vt from './vt.jpg';
import vt1 from './vt1.jpg';
import vt2 from './vt2.jpg';

import du from './du.jpg';
import du1 from './du1.jpg';
import du2 from './du2.jpg';
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

const Karlatourist = () => {
  const hotels = [
    {
        name: 'St. Lawrence Church',
        ratings: 4.5,
        address: 'Post Attur. Karkala Taluk. Udupi District, Karkala 576 117 India',
        contact: '091410 31622' ,
        description: 'A very famous and miraculous Church in the region. Visited by lot of devotees from all states. They celebrate the feast every year for a period of 5-6 days.',
    imageUrls: [law1,law2,law3],
    buttonText: 'BOOK HERE',
    
  },
  {
    name: 'Karkala Gomateshwara Statue',
    ratings: 4.4,
    address: ' Karkala, Karnataka 574104',
    contact: 'null',
    description: 'It is second largest Bahubali or Gommeteswara statue after Shravanabelagola, and it is 41 feet single stone beautiful statue erected on a small hillock. Beautiful scenary from hillock, historical place and great ancient architecture. Must visit place',
    imageUrls: [go,go1,goo],
    buttonText: 'BOOK HERE',
    
  },
  {
    name: 'Chaturmukha Basadi',
    ratings: 4,
    address: 'Chaturmukha Jain Basadi, Karkala, District - Udupi (Karnataka).',
    contact: 'null',
    description: ' Karkala, Karnataka, India. ',
    imageUrls: [cb,cb1,cb2],
    buttonText: 'BOOK HERE',
    
  },
  {
    name: 'Sri Venkataramana Temple',
    ratings: 3.8,
    address: ' 6X8V+847, Karkala - Hiriyadka Rd, Karkala, Karnataka 574104 ',
    contact: ' 082582 30311',
    description: 'It is a very ancient Venkataramana temple, very famous and local people call it thier own Tirupati. Idol is very small, temple is renovated, front pillars have intricate carvings. Must visit if you are in karkala',
    imageUrls: [vt,vt1,vt2],
    buttonText: 'BOOK HERE',
    
  },
  {
    name: 'Durga Waterfalls',
            ratings: 2.5,
            address: '62FJ+9WQ, Tellar Rd, Karkala, Karnataka 576117',
            contact: '080 2235 2828',
            description: "Very nice and peaceful place to Hangout with family. A must visit place for families. ",
    imageUrls: [du,du2,du1],
    buttonText: 'BOOK HERE',
    
  }
];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
      <BackButton to="/Options4">Back</BackButton>
      <PageTitle>Top 5 Tourist Places</PageTitle>
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
          </HotelContainer>
        ))}
      </div>
    </div>
  );
};

export default Karlatourist;