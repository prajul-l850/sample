import React from 'react';
import { Link } from 'react-router-dom';
import './Dating.css'; // Import the CSS file

const Dating = () => {
    return (
        <div>
            <h1>When we made each other's sem exams more fun</h1>
            <p>These were the times when we started intensly chatting and u veenu for me karthu🌝</p>
            <div className="image-container">
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.19 (1).jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.19.jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.20 (1).jpeg" alt="Romantic Moment 4" />
                </div>
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.20 (2).jpeg" alt="Romantic Moment 1" />
                </div>
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.20.jpeg" alt="Romantic Moment 2" />
                </div>
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.21 (1).jpeg" alt="Romantic Moment 3" />
                </div>
                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.21.jpeg" alt="Romantic Moment 4" />
                </div>                <div className="image-box">
                    <img src="/assets/Dating/WhatsApp Image 2025-01-14 at 00.47.22.jpeg" alt="Romantic Moment 4" />
                </div>
            </div>
            <div className="button-container">
                <Link to="/gf">
                    <button>Next:When u finally became mine babyyy😘</button>
                </Link>
            </div>
        </div>
    );
};

export default Dating;
