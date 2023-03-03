import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Fitness Tracker</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
