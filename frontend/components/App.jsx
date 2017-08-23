import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import RootRenderContainer from './session/root_render_container';
import LeaderboardContainer from './user/leaderboard_container'

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Route exact path='/' component={RootRenderContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path='/workouts' component={LeaderboardContainer} />
  </div>
);

export default App;
