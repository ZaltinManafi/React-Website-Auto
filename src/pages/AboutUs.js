import React from 'react';
import CorporateResponsibility from '@components/about-us/CorporateResponsibility';
import OurPartners from '@components/about-us/OurPartners';
import OurHistory from '@components/about-us/OurHistory';
import Mission from '@components/about-us/Mission';
import Layout from '@layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <OurHistory />
      <Mission />
      <CorporateResponsibility />
      <OurPartners />
    </Layout>
  );
};

export default AboutUs;
