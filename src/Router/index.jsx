/*
    ? Here it will be defined which component will be rendered according to the route the user is on. 
    ? If it accesses an unknown route, the 'NotFound' component will be rendered.
*/

import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import { routes } from '../Routes';

import Home from '../Components/Home';
import NotFound from '../Components/NotFound';

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.SIGN_UP} component={() => <Home />} />
            <Route exact path={routes.SIGN_IN} component={() => <Home />} />
            <Route component={() => <NotFound />} />
        </Switch>
    </HashRouter>
);

export default App;