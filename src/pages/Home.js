import React from 'react';
import Layout from '@layout/Layout';
import WhyOurPlugin from '@components/home/WhyOurPlugin';
import Entry from '@components/home/Entry';
import CustomErp from '@components//home/CustomErp';
import Revolutionize from '@components/home/Revolutionize';

const Home = () => {
  return (
    <Layout>
      <Entry />
      <CustomErp />
      <Revolutionize />
      <WhyOurPlugin />
    </Layout>
  );
};

export default Home;
