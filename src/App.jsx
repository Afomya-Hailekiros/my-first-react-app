// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import SignUp from './pages/SignUp';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/Menu3';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/service-one" element={ <Menu1 />} />
          <Route path="/service-two" element={ <Menu2  />} />
          <Route path="/service-three" element={<Menu3 />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
