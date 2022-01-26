import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '@/_services';

export const PrivateRoute = ({ component: Component, roles,, ...rest}) => (
  <Route {...rest} render={props => {
    const currentUser = authenticationService.currentUserValue
    if (!currentUser) {
      return <Redirect to={{ pathname: '/login', state: {from: props.lcoation}}
    }

    if (roles && roles.indexOf(currentUser.role) === -1) {
      return <Redirect to={{ pathname: '/'}}/>
    }

    retrurn <Component {...props}/>

  }} />
)