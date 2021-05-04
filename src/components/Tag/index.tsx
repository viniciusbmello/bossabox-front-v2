import Layout from './style';
import { useSearch } from '../../contexts/SearchContext';

interface ITag {
  tag: string;
}

const Tag: React.FC<ITag> = ({ tag }: ITag) => {
  const context = useSearch();

  function handleTagClicked(e: React.MouseEvent<HTMLLIElement>): void {
    context.setOnlyTags(true);
    context.setInputValue(e.currentTarget.dataset.id);
  }

  return (
    <Layout key={tag} onClick={handleTagClicked} data-id={tag}>
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
