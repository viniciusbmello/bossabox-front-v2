import React, { useRef } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import Layout from './style';
import { ITools, useSearch } from '../../contexts/SearchContext';

const SearchIcon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="Search" {...props} />
));

interface IToolList {
  tool: ITools;
}

const ToolList: React.FC<IToolList> = ({ tool }: IToolList) => {
  const searchIcon = useRef<SVGElement>(null);
  const context = useSearch();
  const { title, link, description, tags } = tool;

  return (
    <Layout>
      <div className="card">
        <div className="card--header">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <h1 className="card--title">
                {title}
                <SearchIcon ref={searchIcon} src="/attach.svg" />
              </h1>
            </a>
          ) : (
            <h1 className="card--title">{title}</h1>
          )}
        </div>
        <p className="card--description">{description}</p>
        <ul className="card--tags">
          {tags.map(tag => (
            <li key={tag}>
              {context.inputValue === tag ? (
                <span className="card--tag-match">
                  <span>#</span>
                  <span>{tag}</span>
                </span>
              ) : (
                <span className="card--tag">
                  <span>#</span>
                  <span>{tag}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default ToolList;
