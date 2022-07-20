
import './App.css';
import React from 'react';
import AppComponent1 from './AppComponent1';
import AppComponent2 from './AppComponent2';
import AppComponent3 from './AppComponent3';
import './assests/styles.sass';

export default () => {
  return (
      <>
          <h1>Webpack and Babel</h1>
          <AppComponent1/>
          <AppComponent2 />
          <AppComponent3 />
      </>
  )
}
