import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './session/greeting_container'
import SessionFormContainer from './session/session_form_container'

const App = () => (
  <div>
    <header>
      <h1>Gym Bump</h1>
      <GreetingContainer />
    </header>
      <Route path='/login' component={SessionFormContainer}/>
      <Route path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
