import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data === "Success") {
        navigate('/booking1');
      } else {
        setErrorMessage(response.data);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container1">
      <Header />
      <div className="overlay1">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
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
            <label htmlFor="password">
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
            Login
          </button>
        </form>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <br></br>
        <p>Click to Sign Up</p>
        <Link to="/signup" className="next-button">
            Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
