import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";
import './SignUp.css';

const Login = ({ handleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="popup-content">
      <h1 className="popup-heading">Login</h1>
      <form className="flex flex-col gap-3">
        <div className="form-group">
          <label htmlFor="username" className="input-label">Username</label>
          <input id="username" type="text" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password</label>
          <div className="relative">
            <input
              className="input pr-8"
              id="password"
              type={showPassword ? "text" : "password"}
            />
            {showPassword ? (
              <FaEye
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
      </form>
      <button className="primary-btn">Submit</button>
      <p className="text-center text-sm my-3">or login with</p>
      <div className="social-icons">
        <div className="social-icon google-icon">
          <FcGoogle className="text-3xl" />
        </div>
        <div className="social-icon linkedin-icon">
          <FaLinkedinIn className="text-2xl" />
        </div>
      </div>
      <p
        className="text-center text-sm my-3 text-shadow cursor-pointer"
        onClick={handleSignIn}
      >
        No Account? create Signup here
      </p>
    </div>
  );
};

export default Login;
