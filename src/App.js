import React from 'react';
import Header from './components/Header';
import './App.css';
import Design from './components/Design';
import Infrastructure from './components/Infrastructure';

function App() {
  return (
    <>
      <Header
        title='A modern publishing platform'
        span='Grow your audience and build your online brand'
      />
      <Design
       title='Designed for the future'
       subtitle1='Introducing an extensible editor'
       subtitle2='Robust content management'
       />
      <Infrastructure
       title='Designed for the future'
       subtitle1='Introducing an extensible editor'
       subtitle2='Robust content management'
       />
    </>
  );
}

export default App;
