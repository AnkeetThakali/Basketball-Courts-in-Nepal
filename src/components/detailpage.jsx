import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detailpage.css';

function CourtDetail() {
    const { id } = useParams();
    const [court, setCourt] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setCourt(null);

        fetch(`https://basketball-courts-in-nepal.onrender.com/courts/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Court not found");
                return res.json();
            })
            .then((data) => {
                setCourt(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Detail fetch error:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="status-container">
                <div className="spinner"></div>
                <p>Retrieving Court Details...</p>
            </div>
        );
    }

    if (!court || court.message) {
        return (
            <div className="status-container">
                <h2>Oops! Court Not Found</h2>
                <p>We couldn't find the court you're looking for.</p>
                <Link to="/" className="back-home-btn">Return to Directory</Link>
            </div>
        );
    }

    return (
        <div className="detail-page">
            <div className="detail-nav">
                <Link to="/" className="back-link">← Back to Directory</Link>
            </div>

            <div className="detail-wrapper">
                <header className="court-header">
                    <span className={`type-tag ${court.type?.toLowerCase()}`}>{court.type}</span>
                    <h1>{court.name}</h1>
                    <p className="detail-address">📍 {court.location?.address}</p>
                </header>

                <div className="court-hero">
                    <img src={court.image || "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500"}  alt={court.name} className="main-image" />
                </div>

                <div className="content-layout">
                    <aside className="quick-stats">
                        <div className="stat-box">
                            <label>Court Type</label>
                            <span>{court.type}</span>
                        </div>
                        <div className="stat-box">
                            <label>Status</label>
                            <span className="open-status">Open Access</span>
                        </div>
                    </aside>

                    <article className="court-description">
                        <h3>About this Court</h3>
                        <p>{court.description}</p>
                        
                        <div className="action-footer">
                            <button className="book-btn" onClick={() => window.print()}>Save Details</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default CourtDetail;