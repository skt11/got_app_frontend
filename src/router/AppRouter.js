import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Battles from '../pages/Battles';
import Home from '../pages/Home';

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/battles/:location" component={Battles} />
                </Switch>
            </Router>
        </div>)
}

export default AppRouter;