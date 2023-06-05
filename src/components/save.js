import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './Images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isMenuOpen ? 'navbar open' : 'navbar'}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="menu-icon close-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
      <div className={isMenuOpen ? 'menu-overlay' : ''} onClick={toggleMenu} />
      <ul className={isMenuOpen ? 'menu open' : 'menu'}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={location.pathname === '/products' ? 'active' : ''}
            onClick={toggleMenu}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </li>
      </ul>
      <button className="rounded-button">Reach us</button>
    </nav>
  );
};

export default Navbar;