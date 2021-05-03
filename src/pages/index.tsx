import React from 'react';
import { NextPage } from 'next';
import useRequest from '../utils/useRequest';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

const Home: NextPage = () => {
  const { data, error } = useRequest<ITools[]>({
    method: 'get',
    url: 'http://localhost:3333/tools',
  });

  if (error) return <div>failed...</div>;

  return (
    <>
      <ul>
        {data
          ? data.map(tool => (
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
