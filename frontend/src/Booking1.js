import React from "react";
import './Booking1.css';
import { Link } from 'react-router-dom';

function Booking1() {
    return (
        <div className="booking-success">
            <h1>Booking<br></br> Successful!</h1>
            <p>Thank you for<br></br> choosing the services!</p>
            <Link to="/" className="next-button">Back to Home Page</Link> 
        
        </div>
    );
}

export default Booking1;