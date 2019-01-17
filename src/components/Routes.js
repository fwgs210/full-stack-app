import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

const Routes = App => props=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/user/:username" component={App} />
                <Route path="/register" component={App} />
                <Route path="/forget-password" component={App} />
                <Route path="/login" component={App} />
                <Redirect to="/login" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes