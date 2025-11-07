import React from "react";
import "./Monuments.css";

const monuments = [
  {
    name: "Taj Mahal",
    emoji: "🏰",
    description:
      "Symbol of eternal love, this ivory-white marble mausoleum is one of the Seven Wonders of the World.",
    location: "Agra, Uttar Pradesh",
    built: "1632–1653",
    architect: "Ustad Ahmad Lahauri",
  },
  {
    name: "Red Fort",
    emoji: "🏰",
    description:
      "Historic fortified palace of the Mughal emperors, showcasing Indo-Islamic architecture.",
    location: "Delhi",
    built: "1638–1648",
    architect: "Ustad Ahmad Lahauri",
  },
  {
    name: "Gateway of India",
    emoji: "🧱",
    description:
      "Iconic arch monument built to commemorate the visit of King George V and Queen Mary.",
    location: "Mumbai, Maharashtra",
    built: "1911–1924",
    architect: "George Wittet",
  },
  {
    name: "Mysore Palace",
    emoji: "👑",
    description:
      "Magnificent royal residence known for its Indo-Saracenic architecture.",
    location: "Mysuru, Karnataka",
    built: "1897–1912",
    architect: "Henry Irwin",
  },
  {
    name: "Konark Sun Temple",
    emoji: "☀️",
    description:
      "13th-century temple dedicated to the Sun God, designed as a gigantic chariot.",
    location: "Konark, Odisha",
    built: "1250 CE",
    architect: "King Narasimhadeva I",
  },
  {
    name: "Hawa Mahal",
    emoji: "🏯",
    description:
      "Palace of Winds with 953 small windows, designed for royal ladies to observe festivals.",
    location: "Jaipur, Rajasthan",
    built: "1799",
    architect: "Lal Chand Ustad",
  },
];

function Monuments() {
  return (
    <div className="monuments-page">
      <h1>🏛️ Famous Monuments of India</h1>
      <div className="monuments-grid">
        {monuments.map((m, index) => (
          <div key={index} className="monument-card">
            <div className="emoji">{m.emoji}</div>
            <h2>{m.name}</h2>
            <p>{m.description}</p>
            <ul>
              <li>📍 <b>Location:</b> {m.location}</li>
              <li>🏗️ <b>Built:</b> {m.built}</li>
              <li>👷 <b>Architect:</b> {m.architect}</li>
            </ul>
            <div className="buttons">
              <a href="#" className="learn-btn">Learn More →</a>
              <a href="#" className="tour-btn">Virtual Tour</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monuments;
