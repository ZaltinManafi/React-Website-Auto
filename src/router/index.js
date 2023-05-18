import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from '@pages/Home';
import Brands from '@pages/Brands';
import AboutUs from '@pages/AboutUs';
import Contact from '@pages/Contact';
import Services from '@pages/Services';
import BrandView from '@pages/BrandView';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<BrandView />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
