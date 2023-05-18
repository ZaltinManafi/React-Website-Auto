import React from 'react';

import Autologo from '@assets/images/Autologo.png';
import homecars from '@assets/images/homecars.png';

const Mission = () => {
  return (
    <div className=" bg-black flex flex-col items-center md:p-10 p-3 md:mt-0 mt-4 justify-center 3xl:max-w-7xl 3xl:mx-auto">
      <div className="text-center text-red-900 hover:text-white  font-serif text-bold text-2xl pb-5 ">
        {' '}
        Our inventory{' '}
      </div>
      <div className="flex md:flex-row flex-col">
        <div className=" flex flex-row flex-1 items-center">
          <img src={homecars} alt="racket" className="md:h-20 h-10 mr-2" />
          <div className="text-white font-serif text-center">
            Our inventory showcases an impressive range of new and pre-owned vehicles from various
            makes and models. Whether you're in search of a sleek sedan, a versatile SUV, a rugged
            pickup truck, or a sporty coupe, we have options to suit every taste and need. We
            meticulously inspect and maintain all our vehicles to ensure they meet our rigorous
            quality standards, providing you with peace of mind and confidence in your purchase.
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center md:pt-0 pt-10 md:pl-5 pl-0">
          <img src={Autologo} alt="eye" className="md:h-20 h-10 mr-2" />
          <div className="text-white font-serif text-center">
            In addition to our sales department, we also have a dedicated finance team to assist you
            in securing the best financing options available. We work with trusted lenders to
            provide competitive rates and flexible terms, helping you find a payment plan that
            aligns with your budget and preferences. Our goal is to make the financing process as
            smooth as possible, so you can drive away in your dream car with ease.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
