import React from 'react';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';

const Routes = App => props=> {
    return (
        <HashRouter>
            <Switch>
                <Route path="/user/:username" component={App} />
                <Route path="/register" component={App} />
                <Route path="/forget-password" component={App} />
                <Route path="/login" component={App} />
                <Route path="/dashboard/:username" component={App} />
                <Redirect to="/login" />
            </Switch>
        </HashRouter>
    )
}

export default Routes