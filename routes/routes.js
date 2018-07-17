import React from 'react';
import React, { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Greetings } />
    <Route path="signup" component={UserSignup} />
    <Route path="login" component={UserLogin} />
  </Route>
)