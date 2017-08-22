import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './session/greeting_container'
import SessionFormContainer from './session/session_form_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Gym Bump</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
