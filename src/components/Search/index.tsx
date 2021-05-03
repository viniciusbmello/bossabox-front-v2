import React from 'react';
import { NextComponentType } from 'next';
import Layout from './style';

import { useSearch } from '../../contexts/SearchContext';

const SearchBar: NextComponentType = () => {
  const context = useSearch();

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.target.value = e.target.value.toLowerCase();
    context.setInputValue(e.target.value);
  }

  return (
    <Layout className="header">
      <span>Search:</span>
      <input
        id="search"
        type="search"
        placeholder="Search"
        onChange={handleSearchChange}
        name="search"
      />
    </Layout>
  );
};

export default SearchBar;
