import React from 'react';
import styled from 'styled-components';

import F from './F.jpg';
const HotelContainer = styled.div`
    background-color: #10371e; /* Change background color to dark gray */
    color: white; /* Set text color to white */
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    height: 100%;
`;

const HotelImage = styled.img`
    width: 400px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 10px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
`;

const ResortsDetails = () => {
    const hotels = [
        {
            name: 'White Lotus',
            ratings: 9.6,
            address: 'Green Park Premier, Mosque Road, Udupi, 576101, Udupi, India',
            contact:'+91 8202531211',
            description: 'Situated in the heart of Udupi, White Lotus is a Boutique Hotel which offers exquisite rooms and choice of restaurants. White Lotus Hotel offers air-conditioned accommodation with a flat-screen TV, a safety deposit box and a desk. Tea and coffee making facilities are also available. The private bathroom comes with a hairdryer and free toiletries. Free Wi-Fi is available for guests. The hotel has a restaurant and room service. Convenient services such as valet parking and luggage storage service can be requested.',
             imageUrls: [F ,F , F],
            buttonText: 'BOOK HERE'
        },
        {
            name: 'Samanvay Boutique',
            ratings: 9.5,
            address: 'Near Govinda Kalyana Mantapa, 576101, Udupi, India',
            contact: '',
            description: 'Samanvay Boutique Hotel is a perfect starting point from which to explore Udupi. The property features a wide range of facilities to make your stay a pleasant experience. Free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk, express check-in/check-out are just some of the facilities on offer. All rooms are designed and decorated to make guests feel right at home, and some rooms come with television LCD/plasma screen, slippers, air conditioning, wake-up service, desk. The hotel offers various recreational opportunities. Discover all Udupi has to offer by making Samanvay Boutique Hotel your base.',
             imageUrls: [F ,F , F],
            buttonText: 'BOOK HERE'
        },
        {
            name: 'Country Inn & Suites by Radisson',
            ratings: 8.8,
            address: 'Address of Hotel B, Mangalore, Karnataka',
            contact: '',
            description: 'Savor the authentic flavors of Mangalore at Hotel B. A true culinary experience awaits you!',
             imageUrls: [F ,F , F],
            buttonText: 'BOOK HERE'
        },

        {
            name: 'Essentia Manipal Inn',
            ratings: 8.7,
            address: ' NH-66 Near Karavali Junction UDUPI, 576103 Udupi, India ',
            contact: '',
            description: ' Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. Free private parking is available and the hotel also features car hire for guests who want to explore the surrounding area. All rooms are fitted with air conditioning, a flat-screen TV with satellite channels, a fridge, a kettle, a shower, a hairdryer and a desk. At the hotel the rooms have a wardrobe and a private bathroom. Guests at Essentia Manipal Inn can enjoy a buffet breakfast. The nearest airport is Mangalore International Airport, 55 km from the accommodation.',
             imageUrls: [F ,F , F],
            buttonText: 'BOOK HERE'
        },
        {
            name: 'Udupi Residency',
            ratings: 7.5,
            address: 'Near Service Bus Stand, 576101, Udupi, India',
            contact: '+91(820)2530005',
            description: "The 3-star Hotel Udupi Residency offers comfort and convenience whether you're on business or holiday in Udupi. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. Facilities like Wi-Fi in public areas, valet parking, car park, room service, meeting facilities are readily available for you to enjoy. Designed for comfort, selected guestrooms offer television LCD/plasma screen, air conditioning, desk, mini bar, fan to ensure a restful night. Access to the hotel's garden will further enhance your satisfying stay. Friendly staff, great facilities and close proximity to all that Udupi has to offer are three great reasons you should stay at Hotel Udupi Residency.",
             imageUrls: [F ,F , F],
            buttonText: 'BOOK HERE'
        }
    
    ];

    return (
        <div style={{ backgroundColor: '#81bb8d', color: 'black', padding: '20px', height: '100vh', overflow: 'auto' }}> {/* Change background color of the entire component */}
            <h2>Top 5 Resorts</h2>
            <div>
                {hotels.map((hotel, index) => (
                    <HotelContainer key={index}>
                        <h3>{hotel.name}</h3>
                        <p>Ratings: {hotel.ratings}</p>
                        <p>Address: {hotel.address}</p>
                        <p>Contact: {hotel.contact}</p>
                        <p>Description: {hotel.description}</p>
                        <div>
                            {hotel.imageUrls.map((imageUrl, i) => (
                                <HotelImage key={i} src={imageUrl} alt={`Image ${i}`} />
                            ))}
                        </div>
                        <Button>{hotel.buttonText}</Button>
                    </HotelContainer>
                ))}
            </div>
        </div>
    );
}

export default ResortsDetails;