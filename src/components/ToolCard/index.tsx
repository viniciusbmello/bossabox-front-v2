import Layout from './style';
import { ITools } from '../../contexts/SearchContext';
import Tag from '../Tag';

interface IToolList {
  tool: ITools;
}

const ToolList: React.FC<IToolList> = ({ tool }: IToolList) => {
  const { title, link, description, tags } = tool;

  return (
    <Layout>
      <div className="card">
        <div className="card--header">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <h1 className="card--title">{title}</h1>
            </a>
          ) : (
            <h1 className="card--title">{title}</h1>
          )}
        </div>
        <p className="card--description">{description}</p>
        <ul className="card--tags">
          {tags.map(tag => (
            <Tag tag={tag} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default ToolList;
