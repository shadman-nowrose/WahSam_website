import React from 'react';
import './ThinFooter.css'

const ThinFooter = () => {
  return (
    <footer className="thin-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Wahsam Global Alliance. All rights reserved.
          
        </p>
        <p>
            Designed by MuseDesign
        </p>
      </div>
    </footer>
  );
};

export default ThinFooter;