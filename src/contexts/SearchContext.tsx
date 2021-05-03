import { NextComponentType } from 'next';
import React, { ReactChild, ReactChildren, useContext, useState } from 'react';

import useRequest from '../utils/useRequest';

const SearchContext = React.createContext(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSearch = (): any => useContext(SearchContext);

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const SearchProvider: NextComponentType = ({ children }: AuxProps) => {
  const [inputValue, setInputValue] = useState('');
  const { data } = useRequest<ITools[]>({
    method: 'get',
    url: 'http://localhost:3333/tools',
    params: {
      q: inputValue,
    },
  });

  return (
    <SearchContext.Provider
      value={{
        results: data,
        setInputValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
