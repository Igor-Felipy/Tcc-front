import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';
import Register from './pages/Register';
import Feed from "./pages/Feed";
import Post from "./pages/PostDetails";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";


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
                <img alt="charging" src={Loading_logo} />
            </h1>
        )
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />;
}

function Logout(){
    const { handleLogout } = useContext(Context);
    return(
        <div>
            {handleLogout()}
        </div>
    )
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login}/>
            <CustomRoute exact path="/logout" component={Logout}/>
            <CustomRoute exact path="/register" component={Register}/>
            <CustomRoute isPrivate exact path="/" component={Feed}/>
            <CustomRoute isPrivate exact path="/profile" component={Profile}/>
            <CustomRoute isPrivate exact path="/newPost" component={NewPost}/>
            <CustomRoute isPrivate exact path="/users" component={Users}/>
            <CustomRoute isPrivate exact path="/post" component={Post}/>
        </Switch>
    );
}