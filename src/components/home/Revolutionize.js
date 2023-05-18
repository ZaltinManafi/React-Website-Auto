import React, { useState } from 'react';
import Onedodge from '@assets/images/Onedodge.png';
import Twododge from '@assets/images/Twododge.png';
import TabSwitch from '@core/tabs/TabSwitch';

const items = ['New Hellcat Demon', 'Basic Dodge Hellcat'];

const Revolutionize = () => {
  const [selectedTab, setSelectedTab] = useState(items[0]);

  return (
    <div className="flex justify-center flex-col pb-40  bg-black 3xl:max-w-7xl 3xl:mx-auto">
      <div className="flex justify-center flex-col">
        <div className="text-center font-bold text-xl pb-5 font-serif text-white ">
          New Cars in Shop !
        </div>

        <h3 className="text-center  font-serif text-red-900 text-3xl font-bold pb-10 ">
          Dodge Challenger SRT Demon Vs. SRT Hellcat
        </h3>

        <div className="flex justify-center">
          <div className="text-white bg-black ">
            <TabSwitch activeTab={selectedTab} items={items} onChange={setSelectedTab} />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="md:w-1/2 w-60">
          {selectedTab === items[0] && <img src={Onedodge} alt="Onedodge" />}
          {selectedTab === items[1] && <img src={Twododge} alt="Twododge" />}
        </div>
      </div>
    </div>
  );
};

export default Revolutionize;
