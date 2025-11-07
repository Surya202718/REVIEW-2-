import React, { useState } from "react";
import "./RoleSwitcher.css";

function RoleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleRoleSelect = (role) => {
    alert(`✅ You selected: ${role}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Switch Role Button */}
      <button className="switch-btn" onClick={openModal}>
        Switch Role
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Choose Your Role</h2>

            <div
              className="role-card admin"
              onClick={() => handleRoleSelect("Admin")}
            >
              <div className="role-header">
                🛡️ <strong>Admin</strong>
              </div>
              <p>Manage content and user interactions</p>
            </div>

            <div
              className="role-card enthusiast"
              onClick={() => handleRoleSelect("Cultural Enthusiast")}
            >
              <div className="role-header">
                🎭 <strong>Cultural Enthusiast</strong>
              </div>
              <p>Explore content and join discussions</p>
            </div>

            <div
              className="role-card creator"
              onClick={() => handleRoleSelect("Content Creator")}
            >
              <div className="role-header">
                ✍️ <strong>Content Creator</strong>
              </div>
              <p>Develop educational content</p>
            </div>

            <div
              className="role-card guide"
              onClick={() => handleRoleSelect("Tour Guide")}
            >
              <div className="role-header">
                🧭 <strong>Tour Guide</strong>
              </div>
              <p>Lead virtual tours and answer queries</p>
            </div>

            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RoleSwitcher;
