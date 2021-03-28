
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/navigations/Header.js'
import Home from './containers/Home.js';
import ComapanyInfo from './containers/CompanyInfo.js'

import './App.css';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/browse/:searchTicker' component={ComapanyInfo} />   
    </Switch>
    </>
  );
}

export default App;
