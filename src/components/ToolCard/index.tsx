import React from 'react';
import Layout from './style';
import { ITools } from '../../contexts/SearchContext';

interface IToolList {
  tool: ITools;
}

const ToolList: React.FC<IToolList> = ({ tool }: IToolList) => {
  const { title, link, description, tags } = tool;

  return (
    <Layout>
      <div className="card">
        <div className="card--header">
          <a href={link} target="_blank" rel="noreferrer">
            <h1 className="card--title">{title}</h1>
          </a>
        </div>
        <p className="card--description">{description}</p>
        <ul className="card--tags">
          {tags.map(tag => (
            <li key={tag}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default ToolList;
