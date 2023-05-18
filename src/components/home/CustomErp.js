import React from 'react';
import Dodgelogo from '@assets/images/Dodgelogo.png';

const CustomErp = () => {
  return (
    <div className="flex md:flex-row-reverse flex-col-reverse justify-center items-center md:p-20 p-5 bg-black  space-x-10 3xl:max-w-7xl 3xl:mx-auto">
      <div className="xl:w-1/2 w-1/3">
        <img src={Dodgelogo} alt="Dodgelogo" />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-red-900 font-serif  text-5xl font-bold pb-10">
          Starting at $81,595!
        </div>
        <div className="flex-wrap font-serif text-center font-bold text-white">
          Dodge Demon lends broad shoulders to 2023 SRT Hellcat Widebody
        </div>
      </div>
    </div>
  );
};
export default CustomErp;
