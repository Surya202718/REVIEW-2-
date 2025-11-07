import React from "react";
import "./Discussions.css";

function Discussions() {
  return (
    <div className="discussions-page">
      <h1>💬 Cultural Discussions</h1>

      <div className="discussions-container">
        {/* Categories Section */}
        <div className="discussion-categories">
          <h2>Categories</h2>
          <ul>
            <li>🏛️ Monuments & Architecture</li>
            <li>🎭 Arts & Culture</li>
            <li>📚 History & Heritage</li>
            <li className="active">🛡️ Preservation Efforts</li>
          </ul>
        </div>

        {/* Button Section */}
        <div className="discussion-action">
          <button className="start-btn">Start Discussion</button>
        </div>
      </div>
    </div>
  );
}

export default Discussions;
