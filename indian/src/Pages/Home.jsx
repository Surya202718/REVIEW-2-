import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* ---------- Hero Section ---------- */}
      <section className="hero-section hero-white">
        <div className="hero-content">
          <h1>Discover Incredible India</h1>
          <p>Explore 5000+ Years of Rich Cultural Heritage</p>
          <div className="hero-buttons">
            <Link to="/tours" className="btn primary">
              🎥 Start Virtual Tour
            </Link>
            <Link to="/monuments" className="btn secondary">
              🏛️ Explore Monuments
            </Link>
            <Link to="/culture" className="btn secondary">
              🎨 Learn Culture
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Stats Section ---------- */}
      <section className="stats-section">
        <div className="stat">
          <h2>40</h2>
          <p>UNESCO Sites</p>
        </div>
        <div className="stat">
          <h2>5000+</h2>
          <p>Years History</p>
        </div>
        <div className="stat">
          <h2>28</h2>
          <p>States</p>
        </div>
        <div className="stat">
          <h2>1600+</h2>
          <p>Languages</p>
        </div>
      </section>

      {/* ---------- Featured Section ---------- */}
      <section className="featured-section">
        <h2>🌟 Featured This Week</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <span className="emoji">🏰</span>
            <h3>Taj Mahal</h3>
            <p>Symbol of eternal love and a UNESCO World Heritage site.</p>
            <Link to="/monuments" className="learn-more">
              Learn More →
            </Link>
          </div>
          <div className="featured-card">
            <span className="emoji">🎭</span>
            <h3>Classical Dance</h3>
            <p>Experience Bharatanatyam, Kathak, and Odissi — the soul of Indian art.</p>
            <Link to="/culture" className="learn-more">
              Learn More →
            </Link>
          </div>
          <div className="featured-card">
            <span className="emoji">🪔</span>
            <h3>Diwali Festival</h3>
            <p>Festival of lights — celebrating victory of light over darkness.</p>
            <Link to="/culture" className="learn-more">
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
