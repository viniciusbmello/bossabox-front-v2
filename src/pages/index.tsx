import { NextComponentType, NextPage } from 'next';
import React from 'react';

const Comp: NextComponentType = () => <h1>First Commit</h1>;

const Home: NextPage = () => <Comp />;

export default Home;
