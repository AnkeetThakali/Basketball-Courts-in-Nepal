import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {
    const [courts, setCourts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This fetches from your local Node server, 
        // which is already connected to your Atlas Cloud
        fetch("http://localhost:5000/courts")
            .then((res) => res.json())
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
            <div className="banner">
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
                                    {/* If image is empty string, show a placeholder */}
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
                                    <a href={`/court/${court.slug}`} className="details-btn">View Details</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;