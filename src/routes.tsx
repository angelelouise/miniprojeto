import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Cursolista from "./pages/Cursolista";
import CursoCriar from "./pages/CursoCadastro";

function Routes() {
    return(
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/curso/listar" component={Cursolista} />
                <Route path="/curso/criar" component={CursoCriar} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;