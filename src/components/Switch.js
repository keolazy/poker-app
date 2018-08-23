import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";

<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={UserSignin} />
  <Route exact path="/signup" component={UserSignup} />
</Switch>;

export default Switch;
