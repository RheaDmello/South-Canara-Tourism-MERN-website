import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './FirstPage.css';

function FirstPage() {
    return (
        <div className="container">
            <div className="top-sidebar">
            <Link to="/home" className="next-button">Home</Link>

            <Link to="/contact" className="next-button">Contact Us</Link>
               
            </div>
            <div className="container"></div>
            
            <h1>South Canara<br></br> Tourism</h1><br></br>
            <p>"Explore the cities of South Canara<br></br> and plan your next trip<br></br> by reading reviews from the community on where<br></br> to stay and what to do.<br></br> Book the perfect tour or attraction, and <br></br>reserve a table at the best restaurants or cafes"</p>
            <br></br>
            <br></br>
            <Link to="/next" className="next-button">Select Place</Link> {/* Corrected Link usage */}
        </div>
    );
}

export default FirstPage;
