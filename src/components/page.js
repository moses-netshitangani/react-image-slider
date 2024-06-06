import React, { useState } from 'react';
import './page.css';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Website</div>
      <button className="navbar-toggle" onClick={handleMenuClick}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <li className="navbar-menu-item"><a href="#">Home</a></li>
        <li className="navbar-menu-item"><a href="#">About</a></li>
        <li className="navbar-menu-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Page;
