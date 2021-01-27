
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/navigations/Header.js'
import Home from './pages/home.js';
import VideoEditor from './components/videoEditor/VidEditorContainer.js'
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Switch>
        <Route path='/' component={Home} exact />     
        <Route path='/videoeditor' component={VideoEditor} exact/> 
    </Switch>
    </>
  );
}

export default App;
