import React from 'react';
import { Link } from 'react-router-dom';

import './Style.css';
import r from './r.jpg';
import c from './c.jpg';
import t from './t.jpg';
import BackButton from './Backbutton';

const KarkalaOptions = () => {
    return (
        <div>
        <Link to="/next" className="back-button">
            <button>Back</button>
        </Link>
        <div className="image-gallery-container">
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/karestaurants" target="_blank"> 
                        <img src={r} alt="restro" />
                    </Link>
                    <br></br>
                    <p className="button-like">Restaurants</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/kacafes" target="_blank"> 
                        <img src={c} alt="cafe" />
                    </Link>
                    <br></br>
                    <p className="button-like">CAFE'S</p>
                </div>
            </div>
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/katouristplaces" target="_blank"> 
                        <img src={t} alt="tourist" />
                    </Link>
                    <br></br>
                    <p className="button-like">TOURIST PLACES</p>
                </div>
                {/* <div className="image-gallery-item">
                    <Link to="/karesorts" target="_blank"> 
                        <img src={p} alt="resort" />
                    </Link>
                    <br></br>
                    <p className="button-like">RESORTS</p>
                </div> */}
            </div>
        </div>
     </div>
    );
}

export default KarkalaOptions;




{/* <div className="image-gallery-container">
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/karestaurants" target="_blank"> 
                        <img src={r} alt="restro" />
                    </Link>
                    <br></br>
                    <p className="button-like">Restaurants</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/kacafes" target="_blank"> 
                        <img src={c} alt="cafe" />
                    </Link>
                    <br></br>
                    <p className="button-like">CAFE'S</p>
                </div>
            </div>
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/katouristplaces" target="_blank"> 
                        <img src={t} alt="tourist" />
                    </Link>
                    <br></br>
                    <p className="button-like">TOURIST PLACES</p>
                </div>
            </div>
        </div> */}


