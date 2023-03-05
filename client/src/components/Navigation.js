import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-pink-600">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">Fitness Tracker</Link>
        <ul className="flex items-center">
          <li>
            <Link to="/profile" className="text-white font-bold hover:text-gray-200 mr-4">Profile</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white font-bold hover:text-gray-200">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
