import React from 'react';
import Design1 from '@assets/images//Design1.jpg';
import Design2 from '@assets/images//Design2.jpg';
import Design3 from '@assets/images//Design3.jpg';

const ServicesSection = () => {
  return (
    <div className=" bg-black flex flex-col justify-center items-center md:p-20 p-10  3xl:max-w-7xl 3xl:mx-auto">
      <div className="text-center text-white  font-serif text-5xl font-bold pb-10">Service</div>
      <h1 className="text-center bg-red-900 font-serif hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        All Services
      </h1>
      <div className="flex flex-row justify-center   md:flex-row flex-col md:space-x-10 space-y-10 text-center">
        <div className="flex flex-col pt-10">
          <img className="migration" src={Design1} alt="Design1" />
          <h3 className="font-size-large  font-serif font-bold text-white pt-5">
            {' '}
            Vehicle Repairs and Maintenance
          </h3>
        </div>

        <div className="flex flex-col">
          <img className="service-image" src={Design2} alt="Design2" />
          <h3 className="font-size-large  font-serif font-bold text-white pt-5">
            {' '}
            Routine Inspections and Diagnostics
          </h3>
        </div>

        <div className="flex flex-col">
          <img className="softwaredev-image" src={Design3} alt="Design3" />
          <h3 className="font-size-large  font-serif font-bold text-white pt-5">
            {' '}
            Bodywork and Painting{' '}
          </h3>
        </div>
      </div>{' '}
    </div>
  );
};

export default ServicesSection;
