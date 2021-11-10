// eslint-disable-next-line
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import SignUp from "./pages/Signup/SignUp";
import SignIn from "./pages/SignIn";
import Feed from "./pages/Feed/Feed";
import NotFound from "./pages/NotFound/NotFound";

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
      {...rest}
      render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/SignIn", state: { from: props.location } }} />
        )
    }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Feed} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;