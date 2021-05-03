import React from 'react';
import { NextPage } from 'next';

import { useSearch } from '../contexts/SearchContext';

const Home: NextPage = () => {
  const context = useSearch();
  return (
    <>
      <ul>
        {context.results
          ? context.results.map(tool => (
              <li key={tool.id}>
                <p>{tool.title}</p>
                <p>{tool.link}</p>
                <p>{tool.description}</p>
                <p>
                  {tool.tags ? tool.tags.map(tag => <span>#{tag} </span>) : ''}
                </p>
              </li>
            ))
          : 'loading...'}
      </ul>
    </>
  );
};

export default Home;
