import { FC } from 'react';
import Layout from './style';
import { useSearch } from '../../contexts/SearchContext';

interface ITag {
  tag: string;
}

const Tag: FC<ITag> = ({ tag }: ITag) => {
  const context = useSearch();

  return (
    <Layout key={tag}>
      {tag.includes(context.inputValue) &&
      context.inputValue &&
      context.onlyTags ? (
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
    </Layout>
  );
};
export default Tag;
