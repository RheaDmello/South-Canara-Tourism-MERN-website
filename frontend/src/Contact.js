import React from 'react';
import './SignUp.css';
import Header from './Header';
const Contact = () => {
  return (
    <div className="overlay1">
      <Header/>
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-subtitle">
        We'd love to hear from you!<br></br> Feel free to reach out to us with any questions,
        comments, or concerns.
      </p>
      <form className="form-group1">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea>
        <br />
        <button type="submit" className="button-like">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;