import { useRef, FC, forwardRef } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import Layout from './style';
import { ITools } from '../../contexts/SearchContext';
import Tag from '../Tag';

const LinkIcon = forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="Search" {...props} />
));

interface IToolList {
  tool: ITools;
}

const ToolList: FC<IToolList> = ({ tool }: IToolList) => {
  const linkIcon = useRef<SVGElement>(null);
  const { title, link, description, tags } = tool;

  return (
    <Layout>
      <div className="card">
        <div className="card--header">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <h1 className="card--title">
                {title}
                <LinkIcon ref={linkIcon} src="/attach.svg" />
              </h1>
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
