import React from "react";
import "./Tours.css";

function Tours() {
  return (
    <div className="tours-page">
      <h1>🎥 Virtual Tours</h1>
      <p className="subtitle">
        Immersive 360° experiences of India’s heritage sites
      </p>

      <div className="tours-container">
        <div className="tour-card">
          <div className="tour-icon">🏰</div>
          <h3>Taj Mahal 360°</h3>
          <p>
            Experience the beauty of the Taj Mahal like never before with our
            panoramic virtual tour.
          </p>
          <button className="tour-btn">Start Tour</button>
        </div>

        <div className="tour-card">
          <div className="tour-icon">🏯</div>
          <h3>Red Fort Delhi</h3>
          <p>
            Walk through the grandeur of Delhi’s Red Fort in a fully immersive
            360° digital experience.
          </p>
          <button className="tour-btn">Start Tour</button>
        </div>

        <div className="tour-card">
          <div className="tour-icon">🕌</div>
          <h3>Hampi Ruins</h3>
          <p>
            Explore the ancient temples and rock architecture of Hampi through
            an interactive virtual visit.
          </p>
          <button className="tour-btn">Start Tour</button>
        </div>
      </div>
    </div>
  );
}

export default Tours;
