/*
    ? Here it will be defined which component will be rendered according to the route the user is on. 
    ? If it accesses an unknown route, the 'NotFound' component will be rendered.
*/

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { routes } from '../Routes';

import Home from '../Components/Home';
import NotFound from '../Components/NotFound';

const App = () => (
    <Router>
        <Switch>
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route component={() => <NotFound />} />
        </Switch>
    </Router>
);

export default App;