import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Welcome to Bharat Heritage</h2>
        <p>Discover India's Rich Cultural Legacy</p>

        <div className="signin-tabs">
          <button className="active">Sign In</button>
          <button>Sign Up</button>
        </div>

        <form>
          <input type="text" placeholder="Email or Username" required />
          <input type="password" placeholder="Password" required />

          <div className="remember-section">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="or-text">Or continue with</p>

          <div className="social-login">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
