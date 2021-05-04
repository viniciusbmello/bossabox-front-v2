import { useRef, useState, forwardRef, ChangeEvent, useEffect } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { NextComponentType } from 'next';
import Layout from './style';

import { useSearch } from '../../contexts/SearchContext';

const SearchIcon = forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="Search" {...props} />
));

const SearchBar: NextComponentType = () => {
  const searchIcon = useRef<SVGElement>(null);
  const context = useSearch();
  const [tagsOnly, setTagsOnly] = useState(context.onlyTags);
  const [inputValue, setInputValue] = useState(context.inputValue);

  useEffect(() => {
    setTagsOnly(context.onlyTags);
    setInputValue(context.inputValue);
  }, [context.onlyTags, context.inputValue]); // Apenas re-execute o efeito quando o count mudar

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>): void {
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
          <SearchIcon ref={searchIcon} src="/search.svg" />
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
