import React from 'react';
import { Link } from 'react-router-dom';
import './Gf.css'; // Import the CSS file

const Gf = () => {
    return (
        <div>
            <h1>When I finally got you</h1>
            <p>Glad you made that move fr😭</p>
            <div className="image-container">
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.01.jpeg" alt="Romantic Moment 1" />
                </div>
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.00.jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.01 (1).jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.01 (2).jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.02.jpeg" alt="Romantic Moment 4" />
                </div>   
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.03.jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.02 (2).jpeg" alt="Romantic Moment 3" />
                </div>          
                <div className="image-box">
                    <img src="/assets/gf/WhatsApp Image 2025-01-14 at 00.56.02 (1).jpeg" alt="Romantic Moment 2" />
                </div>

   

            </div>
            <div className="button-container">
                <Link to="/Pics">
                    <button>Next:Moments I finally got to enjoy with u karthuuu</button>
                </Link>
            </div>
        </div>
    );
};

export default Gf;
