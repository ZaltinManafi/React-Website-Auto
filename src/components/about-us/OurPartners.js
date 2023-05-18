import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Autologo from '@assets/images/Autologo.png';
import Benzlogo from '@assets/images/Benzlogo.png';
import Bmwlogo from '@assets/images/Bmwlogo.png';
import Audilogo from '@assets/images/Audilogo.png';

const Partner = ({ partner, ...props }) => {
  return (
    <a {...props} href={partner.website} target="_blank" rel="noreferrer" className="flex h-full">
      <img
        src={partner.image}
        alt={partner.name}
        className=" w-auto object-contain lg:w-60 w-44 lg:opacity-50 opacity-100 hover:opacity-100 duration-700"
      />
    </a>
  );
};

const OurPartners = () => {
  const partnersData = [
    {
      image: Autologo,
      website: 'https://www.nebula.al',
      name: 'Autologo'
    },
    {
      image: Benzlogo,
      website: 'https://www.pokpay.io',
      name: 'POK'
    },
    {
      image: Bmwlogo,
      website: 'https://www.ritech.co',
      name: 'RiTech'
    },
    {
      image: Audilogo,
      website: 'https://www.orderoo.ai',
      name: 'Order oo'
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 450 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1
    }
  };

  return (
    <div className=" bg-black 3xl:max-w-7xl 3xl:mx-auto align-items-center">
      <h1 className="text-center font-serif text-white text-3xl font-bold md:py-20 py-10">
        Our Partners
      </h1>
      <div className="pt-5 pb-15 3xl:max-w-7xl mx-auto lg:max-w-xl max-w-sm">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows={false}
          itemClass="xs:px-10 px-3">
          {partnersData.map((partner, key) => (
            <Partner partner={partner} key={key} id={partner} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurPartners;
