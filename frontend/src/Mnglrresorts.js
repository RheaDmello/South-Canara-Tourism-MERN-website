import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import nidhivana from './nidhivana.jpg';
import ni from './ni.jpg';
import ni1 from './ni1.jpg';

import river from './river.jpg';
import ub from './ub.jpg';
import ub1 from './ub1.jpg';

import saffron from './saffron.jpg';
import es1 from './es1.jpg';
import es2 from './es2.jpg';


import cottage from './cottage.jpg';
import rr from './rr.jpg';
import rr1 from './rr1.jpg';

import urban from './urban.jpg';
import saf from './saf.jpg';
import saf1 from './saf1.jpg';

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
const Mnglrresorts = () => {
  const hotels = [
    {
        name: 'Nidhivana Farms & Resorts',
            ratings: 4.9,
            address: " Nidhivana Farms, Koodrathe, Bakrebail-Salethoor Road, Via Mudipu, Mangalore",
            contact: '088056 84454',
            description: 'Offering a garden and mountain view, Nidhivana Farms and Resorts, bakrebail-salethoor rd, Mangalore is situated in Mangalore, 29 km from Mangalore Central Station and 27 km from Mangala Devi Temple',
        imageUrls: [nidhivana,ni,ni1],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
        name: 'Urban Retreat Homestay',
            ratings: 4.3,
            address: "Urban retreat road, Near pilikula nisargadhama, Vamanjoor, Mangalore",
            contact: '91 7760634848',
            description: "Nestled amid the lush garden, Urban Retreat Homestay has six rooms categorized under double rooms with one queen bed and Twin Room with two queen beds. As the first homestay of the city, it will offer you a tranquil environment of the ecological preserve while you marvel at the construction with terracotta and laterite tiles. ",
        imageUrls: [urban,ub1,ub],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
   
    {
        name: 'The Estate Resort',
            ratings: 4.2,
            address: 'Nelli Gudde, Badagamijar, Ashwathapura, Moodbidri',
            contact: '080 4709 1220',
            description:'Set at a wonderful elevation along verdantly forested slopes, this resort houses a polished restaurant specializing in Karnataka’s favourite cuisines and a trendy bar serving fine cocktails. With unobstructed mountain views, their accommodations include premium wooden cottages, simple rooms with valley views and ultra-spacious 3-bedroom suites.',
        imageUrls: [cottage,es1,es2],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
         name: 'River Roost Resorts',
            ratings: 4.1,
            address: ' 1- 262/2 - 16 Sabarabail Mudushedde Vamanajoor, Mangalore 575028 India',
            contact: '072598 92233',
            description: 'Situated by the pristine and heavenly Gurupura River, River Roost Resort Mangalore is a dream come true for all nature lovers. The resort is enveloped by the dense greenery of tall trees and offers a peaceful ambiance',
        imageUrls: [river,rr,rr1],
        buttonText: 'BOOK HERE',
        buttonLink: '/SignUp'
    },
    {
      name: 'SaffronStays Blue Flag House',
          ratings: 3.8,
          address: "Shree Mookambika Nivas Hejamady Beach Road, Near Veera Maruthi Temple, Mangalore",
          contact: '08069160000',
          description: "SaffronStays Blue Flag House, a 3-BDR beachfront villa in Hejamady, a property with a garden, is situated in Mangalore, 30 km from Kadri Manjunath Temple, 30 km from Gokarnanatheshwara Temple, as well as 34 km from Mangala Devi Temple",

      imageUrls: [saffron,saf,saf1],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
  }
  ];


  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
          <BackButton to="/Options2">Back</BackButton>
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

export default Mnglrresorts;
