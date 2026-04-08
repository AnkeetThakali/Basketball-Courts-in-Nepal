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
            
        </div>
    );
}

export default Home;