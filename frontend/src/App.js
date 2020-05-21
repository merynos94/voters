import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SiteMenu from './components/site-menu/site-menu';
//import LoginMenu from './components/login-menu/login-menu';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';

function App() {
  

  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={SiteMenu} />  
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;