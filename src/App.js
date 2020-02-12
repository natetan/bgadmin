import { Redirect, Route, Switch } from 'react-router';
import React from 'react';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navigation from './components/Navigation/Navigation';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
