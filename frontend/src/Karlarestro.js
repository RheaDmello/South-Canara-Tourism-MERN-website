import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import shisha4 from './shisha4.jpg';
import shi1 from './shi1.jpg';
import shi2 from './shi2.jpg';

import foodies4 from './foodies4.jpg';
import foo1 from './foo1.jpg';
import foo from './foo.jpg';


import rock4 from './rock4.jpg';
import ro1 from './ro1.jpg';
import ro2 from './ro2.jpg';

import navmi4 from './navmi4.jpg';
import nav from './nav.jpg';
import nav1 from './nav1.jpg';

import byp4 from './byp4.jpg';
import by from './by.jpg';
import by1 from './by1.jpg';
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

const Karlarestro = () => {
  const hotels = [
    {
      name: 'Shisha Food Court',
      ratings: 4.45,
      address: 'Madina Masjid Complex Opp Taluk Office Karkala, Karkala, Karnataka 570104',
      contact:' 089515 20392',
      description: 'Good variety of vegetarian and non-vegetarian dishes, including shawarma, tandoori chicken, kababs, biryani, and Chinese cuisine',
    imageUrls: [shi1,shisha4,shi2],
    buttonText: 'BOOK HERE',
   buttonLink: '/SignUp'
  },
  {
      name: 'Foodies ',
      ratings: 4.35,
      address: ' SH1- jodraste, Karkala, Karnataka 574104',
      contact: ' 072049 70107',
      description: 'Unique recipes and good service at reasonable rates. Veg-Menu is a must try!',
    imageUrls: [foodies4,foo1,foo],
    buttonText: 'BOOK HERE',
   buttonLink: '/SignUp'
  },
  {
      name: 'Rockside Resto Bar',
      ratings: 3.85,
      address: 'NH-169, Kudremukh Road, Kariakallu, ahead of Abharan Motors, Karkala, Karnataka 574104',
      contact: '09740915169',
      description: 'Savor the authentic flavors of Karkala at Foodies. A true culinary experience awaits you!',
    imageUrls: [rock4,ro1,ro2],
    buttonText: 'BOOK HERE',
   buttonLink: '/SignUp'
  },
  {
      name: 'Navami Veg Resto',
      ratings: 3.55,
      address: '6X8W+JHM, Near Navami Supermarket, Karkala, Karnataka 574104 ',
      contact: ' 8971733899',
      description: 'Not as good as other restaurants but you can visit it once',
    imageUrls: [navmi4,nav,nav1],
    buttonText: 'BOOK HERE',
   buttonLink: '/SignUp'
  },
  {
      name: 'Bypass Dhaba',
      ratings: 3.5,
      address: 'Pulkeri, Karkala, Karnataka 574104',
      contact: '099453 04496',
      description: "You'll be offered with the best Chicked- dishes!",
    imageUrls: [byp4,by,by1],
    buttonText: 'BOOK HERE',
   buttonLink: '/SignUp'
  }
];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
       <BackButton to="/Options4">Back</BackButton>
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

export default Karlarestro;