import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Curso from "./pages/Curso";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/curso" component={Curso} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;