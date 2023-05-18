import React from 'react';

const Footer = () => {
  return (
    <div className="text-white bg-red-900 p-15">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col space-y-4 flex-1">
          <h4 className="font-serif font-bold text-black text-lg  ">About Us</h4>
          <div className="font-serif hover:text-black">Our History</div>
          <div className="font-serif hover:text-black">Our Inventory</div>
          <div className="font-serif hover:text-black">Coorporate Responsibility</div>
          <div className="md:pb-0 pb-10 font-serif hover:text-black">Our Partners</div>
        </div>

        <div className="flex flex-col space-y-4  flex-1 ">
          <h4 className="font-serif font-bold text-black text-lg "> Brands </h4>
          <div className="font-serif hover:text-black">Mercedes Benz</div>
          <div className="font-serif hover:text-black">Bmw Motors</div>
          <div className="md:pb-0 pb-10 font-serif  hover:text-black">Dodge Challenger </div>
        </div>

        <div className="flex flex-col space-y-4 flex-1">
          <h4 className="font-bold font-serif text-black text-lg ">Service</h4>
          <div className=" font-serif hover:text-black">Vehicle Repairs and Maintenance</div>
          <div className="font-serif hover:text-black">Routine Inspections and Diagnostics</div>
          <div className="md:pb-0 pb-10 font-serif hover:text-black"> Bodywork and Painting</div>
        </div>

        <div className="flex flex-col flex-1 items-center">
          <h4 className="font-bold font-serif text-black text-lg "> Our Address </h4>
          <div>
            <div className="font-serif hover:text-black">
              {' '}
              Winter Park, FL, United States, Florida, Nr 33, 1056{' '}
            </div>
          </div>
          <div className="flex space-x-8   justify-center pt-10">
            <a
              href="https://www.facebook.com/AutoDealPH/"
              target="_blank"
              rel="noopener noreferrer">
              <div className="hover:text-black ">Facebook</div>
            </a>
            <a
              href="https://www.instagram.com/autodeal_gr/"
              target="_blank"
              rel="noopener noreferrer">
              <div className="hover:text-black">Instagram</div>
            </a>
            <a
              href="https://www.linkedin.com/company/autodeal-com-ph"
              target="_blank"
              rel="noopener noreferrer">
              <div className="hover:text-black">Linked In</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
