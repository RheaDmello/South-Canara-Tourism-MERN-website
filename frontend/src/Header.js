import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="top-sidebar">
      <Link to="/" className="next-button">Home</Link>
      {/* <Link to="/login" className="next-button">Login</Link>
      <Link to="/signup" className="next-button">SignUp</Link> */}
      <Link to="/contact" className="next-button">Contact Us</Link>
    </div>
  );
};

export default Header;