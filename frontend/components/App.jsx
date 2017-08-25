import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RootRenderContainer from './session/root_render_container';
import LeaderboardContainer from './user/leaderboard_container';
import UserShowContainer from './user/user_show_container';
import ExerciseIndexContainer from './exercise/exercise_index_container';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <ProtectedRoute exact path='/' component={RootRenderContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path='/workouts' component={LeaderboardContainer} />
    <Route path='/users/:userId' component={UserShowContainer} />
    <Route path='/exercises' component={ExerciseIndexContainer} />
  </div>
);

export default App;
