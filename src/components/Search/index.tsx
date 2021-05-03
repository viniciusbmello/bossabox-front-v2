import React, { useRef, useState } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { NextComponentType } from 'next';
import Layout from './style';

import { useSearch } from '../../contexts/SearchContext';

const SearchIcon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="Search" {...props} />
));

const SearchBar: NextComponentType = () => {
  const searchIcon = useRef<SVGElement>(null);
  const context = useSearch();
  const [tagsOnly, setTagsOnly] = useState(false);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.target.value = e.target.value.toLowerCase();
    context.setInputValue(e.target.value);
  }

  function handleTagsOnlyChange(): void {
    context.setOnlyTags(!tagsOnly);
    setTagsOnly(!tagsOnly);
  }

  return (
    <Layout className="header">
      <label htmlFor="search">
        <span className="searchIcon">
          <SearchIcon ref={searchIcon} src="/search.svg" />
        </span>
        <input
          id="search"
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
          name="search"
        />
      </label>
      <label htmlFor="onlyTags">
        <input
          id="onlyTags"
          type="checkbox"
          onChange={handleTagsOnlyChange}
          checked={tagsOnly}
          name="onlyTags"
        />
        <span>tags only</span>
      </label>
    </Layout>
  );
};

export default SearchBar;
