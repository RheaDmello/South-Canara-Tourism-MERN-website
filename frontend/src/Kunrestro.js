import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sharon from './sharon.jpg';
import sahana from './sahana.jpg';
import Uva from './Uva.jpg';
import shetty from './shetty.jpg';
import sp1 from './sp1.jpg';
import sp2 from './sp2.jpg';
import shar from './shar.jpg';
import shar1 from './shar1.jpg';
import or from './or.jpg';
import or1 from './or1.jpg';
import sh1 from './sh1.jpg';
import sh2 from './sh2.jpg';
import ms1 from './ms1.jpg';
import ms2 from './ms2.jpg';
import ms from './ms.jpg';

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

const Kunrestro = () => {
  const hotels = [
    {
        name: 'UVA Meridian Bay Resort & Spa',
        ratings: 4.5,
        address: 'Halady Road, Kundapur 576222 India',
        contact:'+91944865551 08254262111',
        description: 'UVA Meridian Bay is most luxurious and finest hotel. Well-equipped and luxurious with modern facilities amidst sprawling greens, service par excellence. Meridian Bay is the best place to take time away from the grind of a hectic schedule or the boredom of a everyday routine.',
      imageUrls: [Uva,sp1,sp2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: ' Sharon ',
        ratings: 4.5,
        address: 'JMFR+6WW, NH 66, opp. Shastri Circle, Kodladi, Kundapura, Karnataka 576201',
        contact: '+91 8254 230623/230823',
        description: ' Hotel Sharon was established in the year 1985 and since its inception it has been rendering with remarkable services and hospitality for its customers through out the country.',
      imageUrls: [sharon,shar1,shar],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Sahana Orchid Hotel',
        ratings: 4.2,
        address: "Opp. Surgeon's Hospital, NH 66, Ankadakatte, Koteshwara,Kundapura,Udupi Dist., Karnataka, India - 576222",
        contact: ' +91 -78480 55555 / 08254 - 261113',
        description: 'Sahana Orchid Hotels which is promoted by the Sahana Group of Companies offers an exquisite range of rooms and suites, choice of restaurant, bar, conference rooms, function halls and much more.',
      imageUrls: [sahana,or1,or],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'Shetty Lunch Home',
        ratings: 4.2,
        address: 'Bus Stand, near New City, Kundapura, Karnataka 576201',
        contact: '099003 62408',
        description: "Shetty Lunch Home, Kundapura has been an establishment since 1956 pioneering the art of authentic Ghee Roasts and especially coastal cuisines.",
      imageUrls: [shetty,sh1,sh2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    },
    {
        name: 'UVA Manish ',
        ratings: 3.75,
        address: '116/1B1, NH 66, opp. to Gandhi Maidan, Kodladi, Kundapura, Karnataka 576201',
        contact: '088671 12555',
        description: "Nestled in the heart of this vibrant town, UVA Manish Hotel is designed to cater to the needs of modern business travellers. Enjoy the warm hospitality, state-of-the-art facilities, and personalized service that define the UVA Manish experience.",
      imageUrls: [ms,ms1,ms2],
      buttonText: 'BOOK HERE',
      buttonLink: '/SignUp'
    }
  ];

  return (
    <div style={{  backgroundColor: '#f0f7ff', color: 'black', padding: '12px' }}>
        <BackButton to="/Options3">Back</BackButton>
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

export default Kunrestro;