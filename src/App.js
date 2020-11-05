import React from 'react'

import Layout from './components/Layout/Layout'
import BuilderBurger from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BuilderBurger />
      </Layout>
    </div>
  );
}

export default App;
