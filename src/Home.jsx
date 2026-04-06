import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import NavBar from './components/navigation';
function Home() {
    const [courts, setCourts] = useState([]);
    const [loading, setLoading] = useState(true);

// Change your useEffect fetch call to this:
useEffect(() => {
    // We use the Render URL you just created
    fetch("https://basketball-courts-in-nepal.onrender.com/courts")
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((data) => {
            setCourts(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Fetch error:", err);
            setLoading(false);
        });
}, []);

    return (
        <div className="home">
            <div className='home-page-banner'>
                <h1>Can't Decide Where to Plan you next game?</h1>
                <p>Let us help you decide</p>
            </div>
            <div>
                <NavBar/>
            </div>
            {/* <div className="basketball-banner">
                <h1>Find Your Next Game</h1>
                <p>Connecting ballers to the best courts in Kathmandu.</p>
            </div>

            <div className="courts-section">
                <h3>Basketball Courts in Kathmandu</h3>
                
                {loading ? (
                    <div className="loader">Loading Courts from Cloud...</div>
                ) : (
                    <div className="court-grid">
                        {courts.map((court) => (
                            <div key={court._id} className="court-card">
                                <div className="card-image">
                                    <img 
                                        src={court.image || "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500"} 
                                        alt={court.name} 
                                    />
                                    <span className={`badge ${court.type}`}>{court.type}</span>
                                </div>
                                <div className="card-content">
                                    <h4>{court.name}</h4>
                                    <p className="address">📍 {court.location.address}</p>
                                    <p className="desc">{court.description.substring(0, 60)}...</p>
                                    <Link to={`/court/${court._id}`} className="details-btn">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
        </div>
    );
}

export default Home;