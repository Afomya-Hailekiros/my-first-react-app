import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';


const SignUp = ({ handleSignIn }) => {
  const { signUp } = useAuth(); // Ensure you have a signUp function in your AuthContext
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(username, email, password); // Sign up the user
      alert('Account created successfully!');
      handleSignIn(); // Switch to login if needed
    } catch (error) {
      alert('Error creating account. Please try again.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-shadow text-white font-bold text-center mb-4">
        Create Your Account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label htmlFor="username" className="input-label">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="email" className="input-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="password" className="input-label">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="primary-btn">Create Account</button>
      </form>
      <p className="text-center text-white text-sm my-3">or sign up with</p>
      <div className="flex gap-6 justify-center">
        <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
          <FcGoogle className="text-3xl" />
        </div>
        <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
          <FaLinkedinIn className="text-2xl text-white" />
        </div>
      </div>
      <p
        className="text-center text-white text-sm my-3 hover:text-lime-100 cursor-pointer text-shadow"
        onClick={handleSignIn}
      >
        Already have an account? Log in
      </p>
    </div>
  );
};

export default SignUp;
