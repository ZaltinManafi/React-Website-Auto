import React from 'react';
import { useNavigate } from 'react-router-dom';
import BenzAi from '@assets/images//BenzAi.jpg';
import BmwAi from '@assets/images//BmwAi.jpg';
import DodgeAi from '@assets/images//DodgeAi.jpg';

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-black flex flex-col justify-center items-center md:p-20 pt-10  3xl:max-w-7xl 3xl:mx-auto">
      <div className="text-center font-serif text-white hover:text-red-900 text-5xl font-bold pb-15 ">
        {' '}
        "Driving Excellence: The Iconic Legacy of Mercedes-Benz, BMW and Dodge"
      </div>
      <div className=" text-center bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
        Best Models
      </div>
      <div className="flex text-center justify-center cursor-pointer md:flex-row flex-col md:space-x-10 space-y-10 ">
        <div className="flex flex-col pt-10">
          <div onClick={() => navigate('/brands/1')}>
            <img className="flex-1 " src={BenzAi} alt="image1" />
          </div>

          <h3 className="font-size-large  font-serif font-bold text-white "> Mercedes Benz</h3>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div onClick={() => navigate('/brands/2')}>
            <img className="flex-1" src={BmwAi} alt="image2" />
          </div>

          <h3 className="font-size-large   font-serif font-bold text-white"> BMW Motors</h3>
        </div>

        <div className="flex flex-col cursor-pointer">
          <div onClick={() => navigate('/brands/3')}>
            <img className="flex-1" src={DodgeAi} alt="image3" />{' '}
          </div>
          <h3 className="font-size-large   font-serif font-bold text-white pt-5"> Dodge </h3>
        </div>
      </div>
    </div>
  );
};

export default Brand;
