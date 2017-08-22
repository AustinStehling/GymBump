import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import RootRender from './session/root_render';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Route exact path='/' component={RootRender}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
