import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mb from './mb.jpg';
import ko3 from './ko3.jpg';
import ha from './ha.jpg';
import cd from './cd.jpg';
import ha1 from './ha1.jpg';
import ha2 from './ha2.jpg';
import mb1 from './mb1.jpg';
import mb2 from './mb2.jpg';
import ko1 from './ko1.jpg';
import ko2 from './ko2.jpg';
import cd1 from './cd1.jpg';
import cd2 from './cd2.jpg';
import my1 from './my1.jpg';
import my2 from './my2.jpg';
import my from './my.jpg';

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

const Kuntourist = () => {
  const hotels = [
    {
      name: 'Hattiangadi Sri Siddhivinayaka Temple',
      ratings: 4.8,
      address: 'JPWM+Q62, Kundapura, Hattiangady, Karnataka 576201',
      contact:'+91 082542 64201',
      description: 'Hattiangadi Sri Siddhivinayaka Temple is one of the ancient Lord Ganesha temples and very powerful. The idol of lord is carved in Saligrama stone and is believed to grow by few centimeters every year. Devotees can perform alankara pooja here to fulfill their wishes and after the arati, the arecanut flowers decorated on the crown of the lord falls as a sign of wish accepted. Temple is located in a calm and serene place , and very close to Kundapura town and around 30kms from Kollur Mookambika temple.',
      imageUrls: [ha,ha1,ha2],
      buttonText: 'BOOK HERE',
      
    },
    {
      name: 'Sri Chandika Durgaaparameshwari Gudi',
      ratings: 4.8,
      address: '  NH-66, Shri Chandikadurgaparameshwari Temple, Kumbashi, Kundapura, Udupi District, Kundapura, Karnataka 576257 ',
      contact: '',
      description: ' Divine place which have so many historical stories.',
      imageUrls: [cd,cd1,cd2],
      buttonText: 'BOOK HERE',
      
    },
    {
      name: 'Maravanthe beach',
      ratings: 4.75,
      address: ' Panvel Road Nh 66, Kundapur 576224 India',
      contact: '',
      description: 'Maravanthe is a uniquely positioned beach in Coastal Karnataka with Arabian Sea on one side and Souparnika river on the other. This unique combination of sea and river on each side of a highway is hard to find elsewhere and is said to be the only one in India.',
      imageUrls: [mb2,mb,mb1],
      buttonText: 'BOOK HERE',
      
    },
    {
      name: 'Kodi Beach',
      ratings: 4.7,
      address: 'JMJ7+8RW, Kodi Road, Kundapura, Karnataka 576224',
      contact: '',
      description: 'Kodi beach is one of the most unique beaches in India mainly for its clean lite golden color stand which is the most beautiful thing about it and makes it entirely Prettier to your sight. ',
      imageUrls: [ko1,ko2,ko3],
      buttonText: 'BOOK HERE',
      
    },
   
    {
      name: 'Malyadi Bird Sanctuary',
      ratings: 4.2,
      address: 'HP38+888, Malyadi,, Kundapura, Karnataka',
      contact: '',
      description: "HP38+888, Malyadi,, Kundapura, Karnataka.Malyadi bird sanctuary is a blessing for bird lovers! There have been numerous sightings of the birds – Whistiling Teals, Purple Moorhen, White Ibis, Comb duck, Carmorants and Darters.",
      imageUrls: [my,my1,my2],
      buttonText: 'BOOK HERE',
      
    }
  ];

  return (
    <div style={{  backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
        <BackButton to="/Options3">Back</BackButton>
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

export default Kuntourist;