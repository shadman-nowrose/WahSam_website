import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from './Images/contact.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="image-container">
        <img src={image} alt="About" />
        <div className="image-content">
          <h1 className="main-heading">A Dedicated Service</h1>
          <h3 className="sub-heading">Committed for Quality Solution</h3>
          <Link to="/contact" className="get-started-button">Get Started</Link>
          {/*<button className="get-started-button">Get Started</button>*/}
        </div>
      </div>
      <div className="text-container">
        <h1 className="main-heading1">Wahsam Global Alliance</h1>
        <p className='paragraph1'>
        WAHSAM GLOBAL is a Import based, distribution, supply and
        trading company representing various global organization
        having principals in Korea, Japan, Thailand, Taiwan and China.

        We are expanding in potential
        avenues; food & Health care
        products, Pharmaceutical, &
        Feed raw materials with
        carrying industrial expert
        knowledge and skill to grow in
        many folds.

        Back in 2020, WAHSAM diversified its operation with the
        objective of Business Development and to provide marketing,
        sales, and supply Chain services to infrastructure development,
        pharmaceutical companies, food Industry, steel furniture
        industry, home appliances and so-forth in Bangladesh.

        Our Sales and Marketing team are not only responsible for
        selling, distribution and promoting brands but rather we would
        like to remain liable to provide one of the best food, healthcare
        product & pharmaceutical raw materials to the targeted
        customers. Our field of expertise includes: 
        </p>
        <div className="about-text-container2">
          <div className='about-text-row'>
            <div className="about-text-column1">              
              <h2 className="about-column-title">Products</h2>
              <ul className='bullet'>
                <li>Structural & Prefabrication Steel Materials</li>
                <li>Pharmaceuticals & Industrial Raw Materials</li>
                <li>Electrical Accessories & Air Conditioners</li>
                <li>Chemical & Industrial Paints</li>
                <li>Industrial Lubricants/Oils</li>
                <li>Industrial Racks & Ladders</li>
              </ul>
            </div>
            <div className="about-text-column2">              
              <h2 className="about-column-title">Services</h2>
              <ul className='bullet'>
                <li>Brand & Digital Marketing</li>
                <li>Business Development & Consultancy</li>
                <li>Channel & Market Development</li>
                <li>Outsourcing & Freelancing</li>
              </ul>
            </div>
          </div>
        </div>
        <p className='paragraph2'>
        There is a growing essential of local healthcare products & Food
        industry worldwide after pandemic. In the verge of that WAHSAM
        GLOBAL is diversifying in Health, Herbal, Pro-Biotic, coating, color
        in the Food & Pharma sector.

        We are having strong rapport in large Pharmaceutical
        Manufacturing Companies & all the big Food manufacture, where
        we are already contributing in construction & industry
        development. Hence, its building our confidence and our team
        are committed to provide excellent and customized customer
        solutions.

        WAHSAM help our principals to establish strong foot hold their
        products in Bangladesh market. Also to promote and distribute
        product fast which comply with regulatory requirements. We are
        have proven to delivered quality products in the Building
        Materials, Industrial & healthcare industry.

        We have partnered with a number of well-known brands and
        organizations to maintain our leadership position in the building
        materials sector also.

        We are exploring in healthcare, pharmaceutical, herbal,
        food-supplement, probiotic sectors to deliver the best possible
        solution for our valued customers.
        </p>
      </div>

      
    </div>
  );
};

export default AboutPage;
