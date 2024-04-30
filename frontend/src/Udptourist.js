import React from 'react';
import styled from 'styled-components';

import t1 from './t1.jpg';
import km1 from './km1.jpg';
import km2 from './km2.jpg';

import t2 from './t2.jpg';
import ka1 from './ka1.jpg';
import ka2 from './ka2.jpg';

import t3 from './t3.jpg';
import ku1 from './ku1.jpg';
import ku2 from './ku2.jpg';

import t4 from './t4.jpg';
import mu1 from './mu1.jpg';
import mu2 from './mu2.jpg';

import t5 from './t5.jpg';
import kod1 from './kod1.jpg';
import kod2 from './kod2.jpg';

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

const Udptourist = () => {
  const hotels = [
    {
        name: 'Udupi Shri Krishna Matha (Temple) ',
        ratings: 4.9,
        address: 'Temple Car St, Sri Krishna Temple Complex, Thenkpete, Maruthi Veethika, Udupi, Karnataka 576101',
        contact:'0820-2520598',
        description: "Ancient Hindu temple complex with elaborate, ornate structures, shrines & a massive statue. It's a must visit when you're in Udupi!",
        imageUrls: [t1,km1,km2],
        
    },
    {
        name: 'Kapu Beach',
        ratings: 4.75,
        address: '6P9Q+XXR, Kapu Beach Rd, Ram Nagar, Kaup, Padu, Karnataka 574106',
        contact: '080 2235 2828',
        description: 'Kapu is a beach village in coastal Karnataka. Kapu’s long sandy beaches offer a panoramic view of the Arabian Sea. One of the main attractions of the Kapu beach is the century-old 130 ft. lighthouse.',
        imageUrls: [t2,ka1,ka2],
       
    },
  
    {
        name: 'Kudlutheertha Falls',
        ratings: 4.7,
        address: ' Nadpal, Karnataka 576112',
        contact: 'NULL',
        description: 'Koodlu Theertha Falls is a mesmerizing waterfall located near Hebri on Udupi-Agumbe Road in Karnataka. Nestled amidst the dense forest of the Western Ghats and adjacent to the Agumbe ranges the waterfall is the first fall of the River Sita. It is also known as Sita Falls.',
        imageUrls: [t4,ku1,ku2],
        
    },
    {
        name: 'Corporation Bank Heritage Museum (Coin Museum)',
        ratings: 4.5,
        address: '8QV2+448, Corporation Bank Road, Thenkpete, Maruthi Veethika, Udupi, Karnataka 5761010',
        contact: '07947144827',
        description: "This museum has a good collection of old coins from various ruling dynasties. Visitors come out more informed about India's monetary history after visiting the museum. Also, it is well maintained and housed in a heritage building.",
        imageUrls: [t3,mu1,mu2],
        
    },
    {
        name: 'Kodi Beach',
        ratings: 4.5,
        address: 'Kundapur Town, Maravanthe, Udupi - 576224',
        contact: 'NULL',
        description: "The beach is clean and tidy.The sunset view is beautiful.The sea walk is a mesmerizing experience.",
        imageUrls: [t5,kod1,kod2],
       
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
      <BackButton to="/Options1">Back</BackButton>
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

export default Udptourist;

