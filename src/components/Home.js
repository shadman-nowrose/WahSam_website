import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image from './Images/home.jpg';
import logoMission from './Images/logo-mission.png';
import logoVision from './Images/logo-vision.png';
import ProductSlider from './ProductSlider';

const Home = () => {
  return (
    <div className="home-page">
      <div className="image-container">
        <img src={image} alt="About" />
        <div className="image-content">
          <h1 className="home-main-heading">WahSam Global Alliance</h1>
          <h3 className="home-sub-heading">Committed for Quality Solution</h3>
          <Link to="/contact" className="home-reach-us-button">Reach Us</Link>
        </div>
      </div>
      <div>
        <div className="text-container1">
          <p className='home-paragraph1'>
          WAHSAM GLOBAL is a Import based, distribution, supply and
          trading company representing various global organization
          having principals in Korea, Japan, Thailand, Taiwan and China.
          </p>
          {/*<p className='home-paragraph2'>
            Our management & team members are highly experienced & professional in the construction industry and building materials industry with various multinational and leading local organizations. Our dedicated team and staff are bound by a common vision to offer professional service on time.
          </p>*/}
        </div>
        <div className="text-container2">
          <div className='text-row'>
            <div className="text-column1">
              <img src={logoMission} alt="Mission" className="logo-mission" />
              <h2 className="column-title">Our Mission</h2>
              <p className="column-paragraph">
              To develop and offer the highest quality products at the
              most competitive prices to our valued clients by adopting
              environmentally friendly, sustainable techniques that
              meet high quality requirements. And to represent
              Internationally renowned company(s) in Bangladesh.
              </p>
            </div>
            <div className="text-column2">
              <img src={logoVision} alt="Vision" className="logo-vision" />
              <h2 className="column-title">Our Vision</h2>
              <p className="column-paragraph">
              Our vision is to continually expansion of our product line
              for distribution in the fields of individual, corporate,
              government, and infrastructure development, with a
              specific end goal of meeting country demand with Quality
              Brand Products.
              </p>
            </div>
          </div>
        </div>
        <ProductSlider />
      </div>
    </div>
  );
};

export default Home;
