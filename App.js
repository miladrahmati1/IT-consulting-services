import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Services from './Services/Services';
import ContactUs from './ContactUs/ContactUs';

const App = () => {
  return (
    <React.Fragment>
      <div>
        <Route exact path='/' component={HomePage} />
      </div>

      <div>
        <Route exact path='/services' component={Services} />
      </div>

      <div>
        <Route exact path='/contact-us' component={ContactUs} />
      </div>
    </React.Fragment>
  );
};

export default App;
