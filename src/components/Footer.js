import React from 'react';
import './Footer.css';
//import Logo from '../components/Images/logo.png';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/*<div className="col">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>*/}
          <div className="col">
            <h3>Address</h3>
            <p>
              House - 8 (5th Floor), Road -1,
              Block – F, Banani, Dhaka-1213,
              Bangladesh.
            </p>
          </div>
          <div className="col">
            <h3>Sales Office</h3>
            <p>
              Mona Trade City(1st floor),
              Bondo Dakpara, Zinzira Highway road, Kadamtali, Keraniganj, Dhaka
            </p>
          </div>
          <div className="col">
            <h3>Email</h3>
            <p>info@wahsam.net</p>
            <p>wahsamga@gmail.com</p>
          </div>
          <div className="col">
            <h3>Phone</h3>
            <p>+8801884484450</p>
            <p>+8801714017613</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
