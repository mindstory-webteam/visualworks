import React from 'react';
import Layout from './components/Layout';
import TransitionWrapper from './components/TransitionWrapper';
import Portfolio from './components/Portfolio.jsx';

function App() {
  return (
    <TransitionWrapper>
      <Layout>
        <Portfolio/>
      </Layout>
    </TransitionWrapper>
  );
}

export default App;