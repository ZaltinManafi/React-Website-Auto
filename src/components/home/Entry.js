import React from 'react';
import homecars from '@assets/images/homecars.png';

const Entry = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center bg-black md:p-20 p-10 bg-black 3xl:max-w-7xl 3xl:mx-auto">
      <div className="flex flex-col items-center">
        <div className="text-red-900 text-7xl font-bold pb-10 font-serif ">AutoDeal</div>

        <div className="flex-wrap font-bold font-serif text-center text-2xl text-white">
          Always trying our best to satisfy your choice.
        </div>
      </div>
      <div className="flex justify-center items-center lg:mt-0 mt-8">
        <img className="object-cover xl:h-80 lg:h-80 h-60 lg:pl-40" src={homecars} alt="homecars" />
      </div>
    </div>
  );
};

export default Entry;
