import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mad from './mad.jpg';
import mad1 from './mad1.jpg';
import mad2 from './mad2.jpg';

import cr1 from './cr1.jpg';
import cr2 from './cr2.jpg';
import cr3 from './cr3.jpg';

import big3 from './big3.jpg';
import big1 from './big1.jpg';
import big2 from './big2.jpg';


import ic from './ic.jpg';
import ic1 from './ic1.jpg';
import ic2 from './ic2.jpg';

import che from './che.jpg';
import che1 from './che1.jpg';
import che2 from './che2.jpg';
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

const Karlacafes = () => {
  const hotels = [
    {
      name: "Maddy's Katti Cafe",
            ratings: 4.5,
            address: 'AP Towers, Karkala Main Road, Ananthashayana Road, near Karnataka Bank Ananthashayana, Karkala, Karnataka 574104',
            contact:' 91 81053 09721',
            description: "It's the Karkalites most favorite place,cuz menu is just perfect.The food was amazing from preparation to presentation, very pleasing",
    imageUrls: [mad1,mad,mad2],
    buttonText: 'BOOK HERE',
    buttonLink: '/SignUp'
  },
  {
    name: 'Cream Hub',
    ratings:4.45 ,
    address: 'Near to M/S K. Laxman Nayak & Son, karkala, Karnataka',
    contact: '095846 32574',
    description: 'To all the corn and cream lovers, this is the place!',
    imageUrls: [cr1,cr2,cr3],
    buttonText: 'BOOK HERE',
    buttonLink: '/SignUp'
  },
  {
    name: 'Big Bite',
    ratings: 3.95,
    address: 'Poornima Complex, 21/2, Banglegudde 2nd Cross Rd, Banglegudde, Karkala, Karnataka 574104',
    contact: '087460 09723',
    description: '. Food delivery is a big plus of BigBite. The creative staff welcomes visitors all year round. The professional service is something these restaurateurs care about. You will definitely like the quiet atmosphere. !',
    imageUrls: [big3,big2,big1],
    buttonText: 'BOOK HERE',
    buttonLink: '/SignUp'
  },
  {
    name: 'Ice n Spice',
    ratings: 3.75,
    address: ' 3/79/2 Ananthashayana, Main Rd, Karkala, Karnataka 574104',
    contact: '  073382 66977',
    description: 'Most visitors state that the staff is well-trained. Come here for the calm atmosphere.',
    imageUrls: [ic,ic1,ic2],
    buttonText: 'BOOK HERE',
    buttonLink: '/SignUp'
  },
  {
    name: "Chetty's Corner",
    ratings: 3.7,
    address: 'Mallige Ln, Karkala, Karnataka 574104',
    contact: ' 094488 36298',
    description: "The burgers and sandwiches are seriously addictive! The flavors are amazing and the portions are satisfying!",
    imageUrls: [che2,che,che1],
    buttonText: 'BOOK HERE',
    buttonLink: '/SignUp'
  }
];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
       <BackButton to="/Options4">Back</BackButton>
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

export default Karlacafes;