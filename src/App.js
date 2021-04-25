
import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './containers/Home.js';
import ComapanyInfo from './containers/CompanyInfo.js'
import Layout from "./containers/Layout.js"
import StocksFilter from "./containers/StocksFilter.js"

import './App.css';

function App() {
  return (
    <Layout>
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/browse/stocks/filter' component={StocksFilter} exact/>   
        <Route path='/browse/:searchTicker' component={ComapanyInfo} />
       
    </Switch>
    </Layout>
  );
}

export default App;
