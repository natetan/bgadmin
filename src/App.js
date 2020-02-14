import { Redirect, Route, Switch } from 'react-router';
import React from 'react';

import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import Navigation from './components/Navigation/Navigation';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/menu' component={MenuPage} />
        <Route path='/contact' component={ContactPage} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
