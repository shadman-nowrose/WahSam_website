import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ContactPage from './components/ContactPage';
import { Footer } from './components/Footer'
import ThinFooter from './components/ThinFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
      <div>
        <Footer />
        <ThinFooter />
      </div>
      
    </div>
  );
}

export default App;