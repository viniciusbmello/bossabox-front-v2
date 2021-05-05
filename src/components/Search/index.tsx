import { useState, useEffect } from 'react';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Layout from './style';

import { useSearch } from '../../contexts/SearchContext';

const SearchBar: NextComponentType = () => {
  const context = useSearch();
  const [tagsOnly, setTagsOnly] = useState(context.onlyTags);
  const [inputValue, setInputValue] = useState(context.inputValue);

  useEffect(() => {
    setTagsOnly(context.onlyTags);
    setInputValue(context.inputValue);
  }, [context.onlyTags, context.inputValue]); // Apenas re-execute o efeito quando o count mudar

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.target.value = e.target.value.replace(/[^a-z0-9]/gi, '').toLowerCase();
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
          <div>
            <Image
              src="/search.svg"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </span>
        <input
          id="search"
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
          value={inputValue}
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
        <span>
          tags
          <br />
          only?
        </span>
        <br />
      </label>
    </Layout>
  );
};

export default SearchBar;
