// SideNav.jsx
import React from 'react';

const SideNav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 pb-8 z-50" >     
      <ul className="space-y-4">
        <li>
          <a href="#hero" className="text-gray-600 hover:text-gray-800">Hero</a>
        </li>
        <li>
          <a href="#footer" className="text-gray-600 hover:text-gray-800">Footer</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
