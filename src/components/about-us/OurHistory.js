import React from 'react';

const OurHistory = () => {
  return (
    <div className=" bg-black flex flex-col items-center md:p-10 p-5 justify-center 3xl:max-w-7xl 3xl:mx-auto">
      <div className="text-white text-5xl font-serif hover:text-red-900 font-bold pb-10">
        {' '}
        About Us
      </div>
      <div className="text-center text-red-900  hover:text-white font-serif  text-semibold text-2xl pb-5">
        {' '}
        Our History
      </div>
      <div className=" flex-wrap text-white  font-serif text-center">
        Welcome to our Car Dealership, your premier destination for all your automotive needs. We
        pride ourselves on offering a wide selection of high-quality vehicles, exceptional customer
        service, and a commitment to ensuring your car buying experience is second to none. With a
        passion for automobiles and a team of knowledgeable professionals, we strive to exceed your
        expectations and help you find the perfect vehicle that fits your lifestyle and budget.
      </div>
    </div>
  );
};

export default OurHistory;
