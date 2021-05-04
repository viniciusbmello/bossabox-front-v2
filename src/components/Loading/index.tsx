import { NextComponentType } from 'next';
import Layout from './style';

const Loading: NextComponentType = () => (
  <Layout>
    <div className="loading is-animating" />
  </Layout>
);

export default Loading;
