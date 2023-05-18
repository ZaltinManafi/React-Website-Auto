import React from 'react';
import Benzlogo from '@assets/images/Benzlogo.png';
import Bmwlogo from '@assets/images/Bmwlogo.png';
import Audilogo from '@assets/images/Audilogo.png';

const WhyOurPlugin = () => {
  return (
    <div
      className="flex justify-center items-center md:p-20 p-10 bg-black
     3xl:max-w-7xl 3xl:mx-auto ">
      <div>
        <div className="text-center text-white font-serif text-semibold text-l pb-5">OUR STORE</div>
        <div className="text-center font-serif text-red-900 text-3xl font-bold pb-10">
          Why to choose our dealership
        </div>

        <div className="flex justify-between lg:flex-row flex-col">
          <div className="flex  items-center flex-col flex-1 p-5">
            <img className=" flex  w-20 justify-center" src={Benzlogo} alt="Benzlogo" />
            <div className="font-size-large font-bold text-white  ">Extensive Selection</div>
            <div className="text-justify text-white   font-serif text-wrap">
              Customers should choose your car dealership because of the extensive selection of
              vehicles you offer. By providing a wide range of car models, makes, and trim levels,
              you cater to diverse customer preferences and increase the likelihood of finding the
              perfect vehicle for each customer. Your dealership stands out as a one-stop shop where
              customers can explore various options and make an informed decision.
            </div>
          </div>

          <div className="flex items-center flex-col  flex-1 p-5">
            <img className="flex  w-20 justify-center" src={Bmwlogo} alt="Bmwlogo" />
            <div className="font-size-large font-bold font-serif text-white">
              {' '}
              Exceptional Customer Service
            </div>
            <div className="text-center text-justify text-white font-serif ">
              Your car dealership prioritizes exceptional customer service, ensuring a positive and
              satisfying experience for every customer. Your knowledgeable and friendly sales team
              goes above and beyond to assist customers, providing detailed information, answering
              inquiries, and guiding them through the entire car-buying process. By focusing on
              building long-term relationships with customers, you establish trust and loyalty,
              leading to repeat business and positive word-of-mouth recommendations.
            </div>
          </div>

          <div className="flex  items-center flex-col  flex-1 p-5">
            <img className="flex  w-20 justify-center" src={Audilogo} alt="Audilogo" />
            <div className="font-size-large font-bold font-serif text-white">
              {' '}
              Competitive Pricing and Financing Options
            </div>
            <div className="text-center text-white  font-serif  text-justify">
              Customers should choose your car dealership because of the competitive pricing and
              flexible financing options you offer. You strive to provide fair and transparent
              pricing, ensuring that customers receive the best value for their investment.
              Additionally, by collaborating with reputable lenders, you offer a range of financing
              choices, including affordable loan rates and favorable terms. This commitment to
              affordability and financial flexibility sets your dealership apart and makes
              purchasing a car a more accessible and rewarding experience for customers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurPlugin;
