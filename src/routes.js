import React from 'react'
import PrivateRoute from './PrivateRoutes'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './screens/login'



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={<Login />} />
            <Route exact path='/register' component={() => <h1>Hello world</h1>} />
            <PrivateRoute path='/' component={() => <h1>Você esta logado</h1>} />
            <PrivateRoute path='/post' component={() => <h1>Você esta logado</h1>} />
            <PrivateRoute path='/new_post' component={() => <h1>Você esta logado</h1>} />
            <PrivateRoute path='/post_details' component={() => <h1>Você esta logado</h1>} />
            <PrivateRoute path='/profile' component={() => <h1>Você esta logado</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;