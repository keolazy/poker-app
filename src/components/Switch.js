import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';


<Switch>
  <Route exact path='/' component={ Home }/>
  <Route exact path='/login' component={ UserSignin }/>
  <Route exact path='/signup' component={ UserSignup }/>
  <Route exact path='/locations' component={ Locations }/>
  <Route exact path='/contact' component={ Contact }/>
</Switch>

export default Switch