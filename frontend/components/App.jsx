import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './session/greeting_container'

const App = () => (
  <div>
    <header>
      <h1>Gym Bump</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
