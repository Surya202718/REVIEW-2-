import React from "react";
import "./Learning.css";

function Learning() {
  return (
    <div className="learning-page">
      <h1>📚 Interactive Learning</h1>

      <div className="learning-container">
        {/* Heritage Quiz Section */}
        <div className="learning-card quiz-card">
          <h2>🧠 Heritage Quiz</h2>
          <p>Test your knowledge of Indian heritage and culture</p>
          <div className="icon">🏆</div>
          <button className="quiz-btn">Start Quiz Challenge</button>
        </div>

        {/* Timeline Section */}
        <div className="learning-card timeline-card">
          <h2>⏱️ Historical Timeline</h2>
          <ul className="timeline-list">
            <li>
              <span>🟠 3300–1300 BCE</span> Indus Valley Civilization
            </li>
            <li>
              <span>🟠 1500–500 BCE</span> Vedic Period
            </li>
            <li>
              <span>🟠 321–185 BCE</span> Mauryan Empire
            </li>
            <li>
              <span>🟠 320–550 CE</span> Gupta Golden Age
            </li>
            <li>
              <span>🟠 1526–1857 CE</span> Mughal Empire
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Learning;
