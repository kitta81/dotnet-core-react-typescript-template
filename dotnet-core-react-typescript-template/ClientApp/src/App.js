import React from 'react';
import { Route } from 'react-router';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import './custom.css';

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data" component={FetchData} />
    </Layout>
  );
};

export default App;
