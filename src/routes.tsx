import React from "react";
import {BrowserRouter as Router, Switch, Route, RouteComponentProps} from 'react-router-dom';
import Home from "./pages/Home";
import Cursolista from "./pages/Cursolista";
import CursoCriar from "./pages/CursoCadastro";
import EstruturaCriar from "./pages/EstruturaCadastro";
import EstruturaCadastro from "./pages/EstruturaCadastro";

function Routes() {
    return(
        <Router >
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/curso/listar" component={Cursolista} />
                <Route path="/curso/criar" component={CursoCriar} />
                <Route path="/estrutura/criar" render={(props: RouteComponentProps<any>) => <EstruturaCriar curso={props.location.state}  />}/>
            </Switch>
        </Router>
    );

}

export default Routes;