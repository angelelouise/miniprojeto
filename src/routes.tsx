import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Cursolista from "./pages/Cursolista";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/curso-list" component={Cursolista} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;