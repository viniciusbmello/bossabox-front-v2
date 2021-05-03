import React from 'react';
import { NextComponentType } from 'next';

import { useSearch } from '../../contexts/SearchContext';
import ToolCard from '../ToolCard';
import Layout from './style';

const ToolList: NextComponentType = () => {
  const context = useSearch();

  return (
    <Layout>
      {context.results
        ? context.results.map(tool => <ToolCard key={tool.id} tool={tool} />)
        : 'loading...'}
    </Layout>
  );
};
export default ToolList;
