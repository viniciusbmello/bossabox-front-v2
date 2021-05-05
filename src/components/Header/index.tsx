import { NextComponentType } from 'next';
import Image from 'next/image';
import Layout from './style';
import SearchBar from '../Search';

const Header: NextComponentType = () => (
  <Layout className="header">
    <div className="header--right-side">
      <div className="header--logo">
        <a href="https://bossabox.com/" target="_blank" rel="noreferrer">
          <Image alt="Logo" src="/logo.svg" layout="fill" objectFit="contain" />
        </a>
      </div>
      <div className="header--title">
        <h1>VUTtR</h1>
        <span>Very Useful Tools to Remember</span>
      </div>
    </div>
    <div className="header--left-side">
      <SearchBar />
    </div>
  </Layout>
);

export default Header;
