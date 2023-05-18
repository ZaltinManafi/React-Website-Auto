import React from 'react';
import Layout from '@layout/Layout';
import FormContact from '@components/contact/FormContact';
import GetContact from '@components/contact/GetContact';

const Contact = () => {
  return (
    <Layout>
      <GetContact />
      <FormContact />
    </Layout>
  );
};

export default Contact;
