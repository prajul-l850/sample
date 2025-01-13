import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="center-container"> {/* Apply the centering class */}
            <h1>Welcome Karthuuu!!!</h1>
            <p>Surprised? Click the button to get even more in love with me lol</p>
            <Link to="/start">
                <button>Lets see how it all started,yeah?
                </button>
            </Link>
        </div>
    );
};

export default Home;
