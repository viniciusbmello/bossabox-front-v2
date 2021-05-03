import React from 'react';
import { NextPage } from 'next';
import ToolList from '../components/ToolList';
import Layout from './style';

const Home: NextPage = () => (
  <Layout>
    <ToolList />
  </Layout>
);

export default Home;
