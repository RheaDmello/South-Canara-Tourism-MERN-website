import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import './SignUp.css';
import Header from './Header';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result.data);
        if (typeof result.data === 'string') {
          if (result.data === "Success") {
            setErrorMessage('Signup successful. Please login.');
          } else if (result.data === "UserExists") {
            setErrorMessage('Please login. Your account already exists.');
          } else {
            console.log("Unexpected response data:", result.data);
            setErrorMessage('An error occurred. Please try again.');
          }
        } else if (typeof result.data === 'object') {
          // The server is returning the user data instead of a string response
          setErrorMessage('Signup successful. Please login.');
        } else {
          console.log("Unexpected response data:", result.data);
          setErrorMessage('An error occurred. Please try again.');
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="overlay">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="next-button">
            Sign up
          </button>
        </form>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <p>Already have an Account</p>
        <Link to="/login" className="next-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;