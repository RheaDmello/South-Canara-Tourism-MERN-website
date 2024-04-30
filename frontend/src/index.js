// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Places from './Places';
// import UdupiOptions from './UdupiOptions';
// import Udprestro from './Udprestro';
// import Udpresort from './Udpresort';
// import Udptourist from './Udptourist';
// import MangaloreOptions from './MangaloreOptions';
// import Mnglrrestro from './Mnglrrestro';
// import Mnglrcafes from './Mnglrcafes';
// import Mnglrtourist from './Mnglrtourist';
// import Mnglrresorts from './Mnglrresorts';
// import KundapuraOptions from './KundapuraOptions';
// import Kunrestro from './Kunrestro';
// import KunCafes from './KunCafes';
// import Kuntourist from './Kuntourist';
// import Kunresort from './Kunresort';
// import KarkalaOptions from './KarkalaOptions';
// import Karlarestro from './Karlarestro';
// import Karlacafes from './Karlacafes';
// import Karlatourist from './Karlatourist';
// import SignUp from './SignUp';
// import Login from './Login';
// import Contact from './Contact';


// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import FirstPage from './FirstPage';
// import Udpcafes from './Udpcafes';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FirstPage />
//   },
//   {
//     path: "/next",
//     element: <Places />
//   },
//   {
//     path: "/home",
//     element: <FirstPage />
//   },
//   {
//     path: "/signup",
//     element: <SignUp />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/loginnext",
//     element: <Places />
//   },
//   {
//     path: "/contact",
//     element:<Contact />
//   },
//   {
//     path: "/Options1",
//     element: <UdupiOptions/>
//   },
//   {
//     path: "/urestaurants",
//     element: <Udprestro />
//   },
//   {
//     path: "/ucafes",
//     element: <Udpcafes />
//   },
//   {
//     path: "/utouristplaces",
//     element: <Udptourist />
//   },
//   {
//     path: "/uresorts",
//     element: <Udpresort />
//   },
//   {
//     path: "/Options2",
//     element: <MangaloreOptions/>
//   },
//   {
//     path: "/mrestaurants",
//     element: <Mnglrrestro />
//   },
//   {
//     path: "/mcafes",
//     element: <Mnglrcafes />
//   },
//   {
//     path: "/mtouristplaces",
//     element: <Mnglrtourist />
//   },
//   {
//     path: "/mresorts",
//     element: <Mnglrresorts />
//   },
//   {
//     path: "/Options3",
//     element: <KundapuraOptions/>
//   },
//   {
//     path: "/kurestaurants",
//     element: <Kunrestro />
//   },
//   {
//     path: "/kucafes",
//     element: <KunCafes />
//   },
//   {
//     path: "/kutouristplaces",
//     element: <Kuntourist />
//   },
//   {
//     path: "/kuresorts",
//     element: <Kunresort />
//   },
//   {
//     path: "/Options4",
//     element: <KarkalaOptions/>
//   },
//   {
//     path: "/karestaurants",
//     element: <Karlarestro />
//   },
//   {
//     path: "/kacafes",
//     element: <Karlacafes />
//   },
//   {
//     path: "/katouristplaces",
//     element: <Karlatourist />
//   }
 

// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <RouterProvider router={router} />
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Places from './Places';
import UdupiOptions from './UdupiOptions';
import Udprestro from './Udprestro';
import Udpresort from './Udpresort';
import Udptourist from './Udptourist';
import MangaloreOptions from './MangaloreOptions';
import Mnglrrestro from './Mnglrrestro';
import Mnglrcafes from './Mnglrcafes';
import Mnglrtourist from './Mnglrtourist';
import Mnglrresorts from './Mnglrresorts';
import KundapuraOptions from './KundapuraOptions';
import Kunrestro from './Kunrestro';
import KunCafes from './KunCafes';
import Kuntourist from './Kuntourist';
import Kunresort from './Kunresort';
import KarkalaOptions from './KarkalaOptions';
import Karlarestro from './Karlarestro';
import Karlacafes from './Karlacafes';
import Karlatourist from './Karlatourist';
import SignUp from './SignUp';
import Login from './Login';
import SignUpbk from './SignUpbk';
import Loginbk from './Loginbk';
import Contact from './Contact';
import FirstPage from './FirstPage';
import Udpcafes from './Udpcafes';
import Booking1 from './Booking1';
import BookingForm from './BookingForm';
import {
  createBrowserRouter,
  RouterProvider
  // Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />
  },
  {
    path: "/next",
    element: <Places />
  },
  {
    path: "/home",
    element: <FirstPage />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signupbk",
    element: <SignUpbk />
  },
  {
    path: "/loginbk",
    element: <Loginbk />
  },
  {
    path: "/loginnext",
    element: <Places />
  },
  {
    path: "/contact",
    element:<Contact />
  },
  {
    path: "/Options1",
    element: <UdupiOptions/>
  },
  {
    path: "/urestaurants",
    element: <Udprestro />
  },
  {
    path: "/ucafes",
    element: <Udpcafes />
  },
  {
    path: "/utouristplaces",
    element: <Udptourist />
  },
  {
    path: "/uresorts",
    element: <Udpresort />
  },
  {
    path: "/Options2",
    element: <MangaloreOptions/>
  },
  {
    path: "/mrestaurants",
    element: <Mnglrrestro />
  },
  {
    path: "/mcafes",
    element: <Mnglrcafes />
  },
  {
    path: "/mtouristplaces",
    element: <Mnglrtourist />
  },
  {
    path: "/mresorts",
    element: <Mnglrresorts />
  },
  {
    path: "/Options3",
    element: <KundapuraOptions/>
  },
  {
    path: "/kurestaurants",
    element: <Kunrestro />
  },
  {
    path: "/kucafes",
    element: <KunCafes />
  },
  {
    path: "/kutouristplaces",
    element: <Kuntourist />
  },
  {
    path: "/kuresorts",
    element: <Kunresort />
  },
  {
    path: "/Options4",
    element: <KarkalaOptions/>
  },
  {
    path: "/karestaurants",
    element: <Karlarestro />
  },
  {
    path: "/kacafes",
    element: <Karlacafes />
  },
  {
    path: "/katouristplaces",
    element: <Karlatourist />
  },
  {
    path: "/booking",
    element: <Booking1 /> // Map the "/booking" route to the Booking component
  },
  {
    path: "/booking1",
    element: <BookingForm /> // Map the "/booking" route to the Booking component
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router} />
);