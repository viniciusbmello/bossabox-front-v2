import React, { useRef } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { NextComponentType } from 'next';
import Layout from './style';

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
            <LogoVUTtR ref={logo} src="/logo.svg" width={24} height="auto" />
          </a>
        </div>
        <div className="header--title">
          <h1>VUTtR</h1>
          <span>Very Useful Tools to Remember</span>
        </div>
      </div>
      <div className="header--left-side">Search</div>
    </Layout>
  );
};

export default Header;