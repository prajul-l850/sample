import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css'; // Import the CSS file

const Story = () => {
    return (
        <div>
            <h1>Our Story...When u went from Megha EV Jr to just Megha lol</h1>
            <p>These were the times I started caring abt u lol🫂🌝</p>
            <div className="image-container">
                <div className="image-box">
                    <img src="/assets/story/WhatsApp Image 2025-01-14 at 00.36.54.jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/story/WhatsApp Image 2025-01-14 at 00.36.53.jpeg" alt="Romantic Moment 1" />
                </div>
                <div className="image-box">
                    <img src="/assets/story/WhatsApp Image 2025-01-14 at 00.36.54 (1).jpeg" alt="Romantic Moment 2" />
                </div>
                <div className="image-box">
                    <img src="/assets/story/WhatsApp Image 2025-01-14 at 00.36.54 (2).jpeg" alt="Romantic Moment 3" />
                </div>
                <div className="image-box">
                    <img src="/assets/story/WhatsApp Image 2025-01-14 at 00.36.55 (1).jpeg" alt="Romantic Moment 4" />
                </div>                <div className="image-box">
                    <img src="/assets/story/WhatsApp Image 2025-01-14 at 00.36.55.jpeg" alt="Romantic Moment 4" />
                </div>
            </div>
            <div className="button-container">
                <Link to="/dating">
                    <button>Next:When we fell for each other(Intense Texting Coming Up😌)</button>
                </Link>
            </div>
        </div>
    );
};

export default Story;
