import { Redirect, Route, Switch } from 'react-router';
import React from 'react';


import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
