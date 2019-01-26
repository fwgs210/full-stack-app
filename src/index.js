import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { Provider } from 'react-redux';
import { store } from './Store'
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';

const WrappedApp = () => (
    <Provider store={store}>
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
    </Provider>
)

ReactDOM.render(<WrappedApp />, document.getElementById("root"));
