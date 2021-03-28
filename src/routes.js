import React from 'react'
import PrivateRoute from './PrivateRoutes'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <h1>Hello world</h1>} />
            <PrivateRoute path='/app' component={() => <h1>Você esta logado</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;