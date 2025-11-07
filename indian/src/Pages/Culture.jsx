import React from "react";
import "./Culture.css";

function Culture() {
  return (
    <div className="culture-page">
      <section className="culture-hero">
        <h1>🎨 Indian Culture</h1>
        <p>Dive into the traditions, art, and festivals of India</p>
      </section>

      <div className="culture-sections">
        <div className="culture-card">
          <span>🪔</span>
          <h3>Festivals</h3>
          <p>
            From Diwali to Holi, celebrate the spirit of unity and joy across
            diverse regions.
          </p>
        </div>

        <div className="culture-card">
          <span>💃</span>
          <h3>Classical Dance</h3>
          <p>
            Experience Bharatnatyam, Kathak, Odissi and other mesmerizing art
            forms.
          </p>
        </div>

        <div className="culture-card">
          <span>🎵</span>
          <h3>Music & Instruments</h3>
          <p>
            Discover the melodies of sitar, tabla, veena, and classical ragas
            that transcend time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Culture;
