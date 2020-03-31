import { Redirect, Route, Switch } from 'react-router';
import React from 'react';

import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import Navigation from './components/Navigation/Navigation';
import Notice from './components/Notice/Notice';

import './App.css';
import strings from './resources/strings.json';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Notice message={strings['covid-hours']} />
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
