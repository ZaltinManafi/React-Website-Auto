import Brand1 from '@components/brands/Brand1';
import Brand2 from '@components/brands/Brand2';
import Layout from '@layout/Layout';
import React from 'react';
import { useParams } from 'react-router';

const BrandView = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Layout>
      {id === '1' && <Brand1 />}
      {id === '2' && <Brand2 />}
      {id === '3' && <Brand2 />}
    </Layout>
  );
};

export default BrandView;
