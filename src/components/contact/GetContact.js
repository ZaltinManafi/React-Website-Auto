import React from 'react';
import Hotpot1 from '@assets/images//Hotpot1.png';

const GetContact = () => {
  return (
    <div className=" bg-black flex lg:flex-row flex-col space-x-15 justify-center items-center md:p-20 p-10 3xl:max-w-7xl 3xl:mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-center  font-serif text-7xl font-bold pb-10">
          Get in touch with us
        </h2>
        <div className="flex-wrap text-center   font-serif text-xl font-semibold text-red-900">
          Send us a request and our team will get back at you as soon as possible with an answer.
        </div>
      </div>

      <img
        className="self-auto object-cover h-100 border-double border-4 border-red-900"
        src={Hotpot1}
        alt="pic"
      />
    </div>
  );
};

export default GetContact;
