import React from 'react';
import { NextComponentType } from 'next';
import Layout from './style';

const SearchBar: NextComponentType = () => (
  <Layout className="header">
    <span>Search:</span>
    <input type="text" />
  </Layout>
);

export default SearchBar;
