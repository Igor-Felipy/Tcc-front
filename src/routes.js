// eslint-disable-next-line
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { logout } from "./services/auth";

import { isAuthenticated } from "./services/auth";

import SignUp from "./pages/Signup/SignUp";
import SignIn from "./pages/SignIn";
import Feed from "./pages/Feed/Feed";
import NotFound from "./pages/NotFound/NotFound";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile/Profile";

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
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/" component={Feed} />
            <PrivateRoute exact path="/newpost" component={NewPost} />
            <PrivateRoute exact path="/logout" component={logout} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;