import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

const Protected = ({component: Component, path, loggedIn, currentUser}) => (
  <Route exact path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/users/${currentUser.id}`} />
    )
  )}/>
);


export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
