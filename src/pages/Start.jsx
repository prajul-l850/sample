import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css'; // Import the CSS file

const Start = () => {
    return (
        <div>
            <h1>Our Start</h1>
            <p>Glad I started sending those reels🥹</p>
            <div className="image-container">
                <div className="image-box">
                    <img src="/assets/start/WhatsApp Image 2025-01-14 at 00.18.53 (1).jpeg" alt="Romantic Moment 1" />
                </div>
                <div className="image-box">
                    <img src="/assets/start/WhatsApp Image 2025-01-14 at 00.18.53.jpeg" alt="Romantic Moment 2" />
                </div>
                <div className="image-box">
                    <img src="/assets/start/WhatsApp Image 2025-01-14 at 00.18.54 (1).jpeg" alt="Romantic Moment 3" />
                </div>
                <div className="image-box">
                    <img src="/assets/start/WhatsApp Image 2025-01-14 at 00.18.54.jpeg" alt="Romantic Moment 4" />
                </div>
            </div>
            <div className="button-container">
                <Link to="/story">
                    <button>Next: Our Story</button>
                </Link>
            </div>
        </div>
    );
};

export default Start;
