import React, { useRef } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { NextComponentType } from 'next';
import Layout from './style';
import SearchBar from '../Search';

const LogoVUTtR = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="Logo" {...props} />
));

const Header: NextComponentType = () => {
  const logo = useRef<SVGElement>(null);

  return (
    <Layout className="header">
      <div className="header--right-side">
        <div className="header--logo">
          <a href="https://bossabox.com/" target="_blank" rel="noreferrer">
            <LogoVUTtR ref={logo} src="/logo.svg" />
          </a>
        </div>
        <div className="header--title">
          <h1>VUTtR</h1>
          <span>
            Very Useful Tools
            <br />
            to Remember
          </span>
        </div>
      </div>
      <div className="header--left-side">
        <SearchBar />
      </div>
    </Layout>
  );
};

export default Header;
