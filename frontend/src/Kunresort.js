import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bl from './bl.jpg';
import pos from './pos.jpg';
import mer from './mer.jpg';
import aj from './aj.jpg';
import mer1 from './mer1.jpg';
import mer2 from './mer2.jpg';
import bl1 from './bl1.jpg';
import bl2 from './bl2.jpg';
import pos2 from './pos2.jpg';
import pos1 from './pos1.jpg';
import aj1 from './aj1.jpg';
import aj2 from './aj2.jpg';
import mh1 from './mh1.jpg';
import mh2 from './mh2.jpg';
import mh from './mh.jpg';

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

const Kunresort = () => {
  const hotels = [
    {
        name: 'Mahalakshmi Antarvanam Resort | Homestay & Farms',
            ratings: 4.5,
            address: 'Taluk, near Indian Oil Petrol Bunk, Halkal, Baindur, Halkal Junction, Karnataka 576220',
            contact: '+91 8073854446',
            description: "Antarvanam offers resort & homestay accommodations with a combination of old-world charm and modern amenities. The homestay lies in the foothills of the Western Ghats..",
      imageUrls: [mh,mh1,mh2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Aanejari Butterfly Camp-junglelodges',
        ratings: 4.4,
        address: 'Near Halkal, Byndoor-Kollur road, Byndoor, Taluk, Kollur, Karnataka 576220 ',
        contact: '+91 -94808 87187',
        description: ' Amidst the undisturbed natural and lush green setting of the Mookambika Wildlife Sanctuary, the Anejhari Butterfly Camp promises an experience of a lifetime with the Souparnika river meandering gently by the camp and the sweet fragrance of the trees flowing in the air.',
      imageUrls: [aj,aj1,aj2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Meridian Bay Resort & Spa',
            ratings: 4.3,
            address: ' UVA Meridian Bay Resort and Spa (A unit of UVA Infrastructures) Prafulla Enclave, Halady Road,, 576222 Kundapur, India ',
            contact:'+91 08254262111',
            description: 'UVA Meridian Bay Resort & Spa, Kundapur is a well-equipped and luxurious facility located amidst sprawling greens.',
      imageUrls: [mer,mer1,mer2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Blue Waters',
        ratings: 4.25,
        address: ' kundapura Road, Near inspection bungalow, Kundapura, Karnataka 576201',
        contact: '+91-6360208953',
        description: 'On the banks of the Panchagangavalli River, this unpretentious hotel on landscaped grounds is 2 km from the Shree Kundeshwara Temple and 7 km from Kundapura train station.',
      imageUrls: [bl,bl1,bl2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'The Postcard on the Arabian Sea',
            ratings: 4.2,
            address: 'MJPW+558, Trasi Proper, Karnataka 576247',
            contact: '+91 079995 55222',
            description: 'The Postcard on the Arabian Sea a beautiful property sits majestically on the secluded Trasi beach. ',
      imageUrls: [pos,pos1,pos2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    }
    

  ];

  return (
    <div style={{  backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
         <BackButton to="/Options3">Back</BackButton>
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

export default Kunresort;