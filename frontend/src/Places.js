import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Style.css';
import a from './Udupi.jpg';
import b from './mangalore.jpg';
import c from './Kundapura.jpg';
import d from './Karkala.jpg';

const ImageGallery = () => {
    return (
        <div className="image-gallery-container">
            <Link to="/" className="back-button">
                <button>Back</button>
            </Link>
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/Options1" target="_blank">   
                        <img src={a} alt="Udupi" />
                    </Link>
                    <br></br>
                    <p className="button-like">UDUPI</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Options2" target="_blank"> 
                        <img src={b} alt="Mangalore" />
                    </Link>
                    <br></br>
                    <p className="button-like">MANGALURU</p>
                </div>
            </div>
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/Options3" target="_blank"> 
                        <img src={c} alt="Kundapura" />
                    </Link>
                    <br></br>
                    <p className="button-like">KUNDAPURA</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Options4" target="_blank"> 
                        <img src={d} alt="Karkala" />
                    </Link>
                    <br></br>
                    <p className="button-like">KARKALA</p>
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;