
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/navigations/Header.js'
import Home from './containers/Home.js';

import './App.css';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Switch>
        <Route path='/' component={Home} exact />     
    </Switch>
    </>
  );
}

export default App;
