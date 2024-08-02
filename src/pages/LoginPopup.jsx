import React, { useState, useRef, useEffect } from "react";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import { motion } from "framer-motion";
import './SignUp.css'; // Importing CSS styles

const LoginPopup = ({ loginPopup, handleLoginPopup }) => {
  // State to manage the visibility of the SignIn component
  const [showSignUp, setShowSignUp] = useState(false);

  // Toggle between SignIn and Login components
  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  // Reference for the login popup container
  const loginPopupRef = useRef();

  useEffect(() => {
    // Function to close the popup when clicking outside of it
    const handleClickOutside = (e) => {
      if (e.target === loginPopupRef.current) {
        handleLoginPopup(false);
      }
    };

    // Add event listener for clicks
    window.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleLoginPopup]);

  return (
    <>
      {/* Conditionally render the popup based on loginPopup state */}
      {loginPopup && (
        <div
          ref={loginPopupRef}
          className="login-popup" // Apply styles for the popup
        >
          <div className="popup-container"> {/* Container for the popup content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="popup-content" // Apply styles for the content area
            >
              {/* Render SignIn or Login component based on state */}
              {showSignUp ? (
                <SignUp handleSignIn={handleSignUp} />
              ) : (
                <Login handleSignIn={handleSignUp} />
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
