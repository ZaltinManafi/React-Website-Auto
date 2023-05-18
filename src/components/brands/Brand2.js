import React from 'react';
import BmwAi from '@assets/images/BmwAi.jpg';

const Brand2 = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <div className="text-center text-white text-5xl font-bold pb-15 "> Bmw Motors </div>
      <img className="flex 1 w-160" src={BmwAi} alt="image2" />
      <div className="flex flex-row p-20 pr-30 items-center">
        <div className="pl-40 pr-40 text-paleSky font-semibold">
          BMW, a name that resonates with automotive enthusiasts around the globe, represents the
          pinnacle of driving pleasure and German engineering. With a storied heritage spanning over
          a century, BMW has established itself as a leading luxury car brand, renowned for its
          exceptional performance, striking design, and advanced technology. Each BMW vehicle
          seamlessly blends power and precision, delivering an exhilarating driving experience that
          caters to both the practical and the thrill-seeking driver. From their iconic "Ultimate
          Driving Machines" to their lineup of versatile SUVs and electric vehicles, BMW showcases a
          commitment to innovation and pushing the boundaries of automotive excellence. Meticulous
          attention to detail is evident in every aspect of a BMW, from the refined interior with
          cutting-edge features to the superior handling and dynamic responsiveness on the road. As
          a symbol of luxury, performance, and sheer driving pleasure, BMW continues to capture the
          hearts of car enthusiasts, defining what it truly means to be the "Ultimate Driving
          Machine."
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className=" text-red-900 font-bold"> Bmw </div>
            <div className="text-red-900 font-light"> March 7, 1916, Munich, Germany</div>
          </div>

          <div>
            <div className=" text-red-900 font-bold ">Link</div>
            <div className="text-red-900 font-light"> bmw.com</div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
export default Brand2;
