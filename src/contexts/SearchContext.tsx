import { NextComponentType } from 'next';
import { useContext, useState, createContext } from 'react';

import useRequest from '../utils/useRequest';

const SearchContext = createContext(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSearch = (): any => useContext(SearchContext);

export interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

interface AuxProps {
  children: React.ReactChild | React.ReactChildren;
}

const SearchProvider: NextComponentType = ({ children }: AuxProps) => {
  const [inputValue, setInputValue] = useState('');
  const [onlyTags, setOnlyTags] = useState(false);
  const { data, error } = useRequest<ITools[]>({
    method: 'get',
    url:
      'https://my-json-server.typicode.com/viniciusbmello/bossabox-json/tools',
    params: !onlyTags
      ? {
          q: inputValue,
        }
      : {
          tags_like: inputValue,
        },
  });

  return (
    <SearchContext.Provider
      value={{
        results: data, // tools
        error,
        inputValue,
        setInputValue,
        onlyTags,
        setOnlyTags,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
