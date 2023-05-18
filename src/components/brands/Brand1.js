import React from 'react';
import BenzAi from '@assets/images/BenzAi.jpg';

const Brand1 = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <div className="text-center text-white text-5xl font-bold pb-15 "> Mercedes Benz</div>
      <img className="flex 1 w-160" src={BenzAi} alt="image2" />
      <div className="flex flex-row p-20 pr-30 items-center">
        <div className="pl-40 pr-40 text-paleSky font-semibold">
          Mercedes-Benz, a renowned luxury automobile brand, has long been synonymous with elegance,
          sophistication, and cutting-edge automotive engineering. With a rich history dating back
          over a century, Mercedes-Benz has consistently set the standard for automotive innovation,
          pushing the boundaries of technology and design. The brand's commitment to excellence is
          evident in every vehicle they produce, combining sleek aesthetics, superior craftsmanship,
          and a seamless blend of performance and comfort. Whether it's their iconic sedans,
          powerful SUVs, or breathtaking sports cars, Mercedes-Benz vehicles are engineered to
          deliver an unparalleled driving experience. From their state-of-the-art safety features to
          their meticulously crafted interiors, Mercedes-Benz continues to captivate automotive
          enthusiasts worldwide, cementing their position as a true icon of luxury and refinement in
          the automotive industry.
        </div>
      </div>
    </div>
  );
};
export default Brand1;
