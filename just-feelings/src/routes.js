import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';
import Register from './pages/Register';
import Feed from "./pages/Feed";


import Loading_logo from './pages/imgs/jf_logo.gif';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return(
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"   
            }}>
                <img src={Loading_logo} />
            </h1>
        )
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login}/>
            <CustomRoute exact path="/register" component={Register}/>
            <CustomRoute isPrivate exact path="/users" component={Users}/>
            <CustomRoute exact path="/" component={Feed}/>
        </Switch>
    );
}