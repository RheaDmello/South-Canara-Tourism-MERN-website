// import React, { useState } from 'react';
// import './SignUp.css';
// import { Link } from 'react-router-dom';
// import Header from './Header';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isNameEmailEntered, setIsNameEmailEntered] = useState(false);

//   const handleNameEmailChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email' && value.trim() !== '' && email.trim() !== '') {
//       setIsNameEmailEntered(true);
//     } else {
//       setIsNameEmailEntered(false);
//     }
//     setEmail(value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     if (!isNameEmailEntered) {
//       e.preventDefault(); // Prevent default behavior if name and email are not entered
//       alert('Please enter both name and email to login.');
//     }
//   };

//   return (
//     <div className="container1">
//       <Header />
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleNameEmailChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type="submit" className={`button next-button ${isNameEmailEntered ? '' : 'disabled'}`}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import Header from './Header';

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
        navigate('/');
      } else if (response.data.error === 'incorrect_email') {
        setErrorMessage('Incorrect email. Please try again.');
      } else if (response.data.error === 'incorrect_password') {
        setErrorMessage('Incorrect password. Please try again.');
      } else if (response.data.error === 'incorrect_both') {
        setErrorMessage('Incorrect email and password. Please try again.');
      } else {
        setErrorMessage('Incorrect Password');
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="overlay">
        <h2>Login</h2>
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
              className="from-control rounded-0"
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
              className="from-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
