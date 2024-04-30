import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import kadri from './kadri.jpg';
import te1 from './te1.jpg';
import te2 from './te2.jpg';


import sultan from './sultan.jpg';
import su from './su.jpg';
import su1 from './su1.jpg';

import mangaldevi from './mangaldevi.jpg';
import dev1 from './dev1.jpg';
import dev2 from './dev2.jpg';


import aloysius from './aloysius.jpg';
import aloy1 from './aloy1.jpg';
import alo from './alo.jpg';

import panambur from './panambur.jpg';
import pan1 from './pan1.jpg';
import pan2 from './pan2.jpg';

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

const Mnglrtourist = () => {
  const hotels = [
    {
        
name: 'Kadri Shree Manjunatha Temple',
ratings: 4.9,
address:  'Kadri Rd, Vasanth Vihar, Kadri, Mangaluru, Karnataka 575002',
contact: '0824 221 4176',
description: 'This is a beautiful temple campus in the heart of Mangalore. This temple is dedicated to Lord Manjunatha as well as other deities such as Lord Ganapathi, Goddess Durgaparameshwari, Lord Ayyappa',
imageUrls: [kadri,te2,te1],
buttonText: 'BOOK HERE',

},
{
name: 'Mahatobhara Shri Mangaladevi Temple',
ratings: 4.9,
address: "Mangaladevi Temple Rd, Bolar, Mangaluru, Karnataka 575001",
contact: '0824 241 5476',
description: 'The Mangaladevi Temple is a Hindu temple at Bolara in the city of Mangalore in the Indian state of Karnataka.',
imageUrls: [mangaldevi,dev1,dev2],
buttonText: 'BOOK HERE',

},
{
name: 'St. Aloysius Chapel',
ratings: 4.8,
address: "P B No 720, P, B 720, St Aloysius College Rd, Kodailbail, Mangaluru, Karnataka 575003",
contact: '0824 244 9749',
description: "St. Aloysius Chapel, or the chapel of St. Aloysius College, is a Catholic chapel in Mangalore in the state of Karnataka in southwest India. The Chapel is situated in the heart of the city on the Lighthouse Hill.",
imageUrls: [aloysius,aloy1,alo],
buttonText: 'BOOK HERE',

},
{
name: 'Panambur Beach',
ratings: 4.6,
address: ' WRP3+QRH, Port Trust Panambur, NH 66, near New Mangalore, Mangaluru, Karnataka 575010',
contact: '9945928399',
description:'Tranquil beach featuring a broad stretch of sand & a lighthouse with views from the top',
imageUrls: [panambur,pan1,pan2],
buttonText: 'BOOK HERE',

},
{
name: 'Sultan Bathery',
ratings: 4.6,
address: 'VRQC+VCG, Sulthan Bathery Rd, Urva, Gandhinagar, Mangaluru, Karnataka 575003',
contact: '080 2235 2828',
description: 'The dev1 Bathery watch tower, constructed in 1784 by Tipu dev1 is in Boloor, 4 km from the centre of Mangalore city, the chief port city in the state of Karnataka, India.',
imageUrls: [sultan,su,su1],
buttonText: 'BOOK HERE',

}
];


  return (
    <div style={{ backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
          <BackButton to="/Options2">Back</BackButton>
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

export default Mnglrtourist;





























