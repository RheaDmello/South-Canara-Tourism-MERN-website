
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ee1 from './ee1.jpg';
import ee from './ee.jpg';
import ee2 from './ee2.jpg';
import m1 from './m1.jpg';
import m2 from './m2.jpg';
import m3 from './m3.jpg';
import kf from './kf.jpg';
import kf1 from './kf1.jpg';
import kf2 from './kf2.jpg';

import dh from './dh.jpg';

import dh1 from './dh1.jpg';
import dh2 from './dh2.jpg';
import ta1 from './ta1.jpg';
import ta2 from './ta2.jpg';
import ta from './ta.jpg';

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

const KunCafes = () => {
  const hotels = [
    {
      name: 'Dhyan Health Bar & Yoga Cafe',
      ratings: 4.6,
      address: 'Kodi Sea Walk, Point, Kodi Beach Road, Kodi, Udupi - 576217 (Kundapura)',
      contact: '07942676880',
      description: 'One of the Hidden Gem - Ice cream shops in Kodi',
        imageUrls: [dh,dh1,dh2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
      name: 'Eshanya Street Food Cafe',
      ratings: 4.5,
      address: 'No 6115/A, Gsr Square, 2nd Block, Muncipal Main Road, Kundapura, Udupi - 576201',
      contact:'+07947125235',
      description: "Eshanya Street Food Cafe, established in 2009, a budget friendly cafe in the town. You can enjoy Indian street food with rooftop experience. We offer chats, sundaes, combos and much more. For more updates follow us on Facebook & Instagram.",
imageUrls: [ee1,ee2,ee],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
       
      name: ' M Cafe',
      ratings: 4.25,
      address: 'Main Road, Kundapura, Udupi - 576201 (Above Sai Departmental Store, Near Shastri Circle, Near to JK Tower',
      contact: '+089048 49848',
      description: ' MCafe Multi Cuisine Restaurants- Lunch home in Kundapura, Fish Restaurant, Chicken Ghee Roast & Kundapura Chicken Special',
    imageUrls: [m1,m2,m3],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
  
    {
      name: 'KAFETOZ',
      ratings: 4.2,
      contact:'+085500 08554',
      address: 'No. 4, 1st Floor, Youth Service Building, Bhandarkars College Road, Kundapura, Udupi - 576201',
      description: 'A budget friendly cafe in the town. You can enjoy Indian street food',
imageUrls: [kf2,kf,kf1],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
   
    {name: 'Tandoori Chai',
    ratings:4.2,
    address: 'Koteshwara Proper, Koteshwara, Udupi - 576222',
    contact: '088671 12555',
    description: "Tandoori Chai in Koteshwara,Udupi well known for Coffee Shops in Udupi ",
        imageUrls: [ta,ta1,ta2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
         <BackButton to="/Options3">Back</BackButton>
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

export default KunCafes;

