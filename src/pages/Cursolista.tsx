import React from "react";
import '../styles/pages/curso-lista.css';
import '../styles/pages/btn-create.css';
import { Link } from 'react-router-dom';
import Barra from './Barra';
import Cursos from '../api/cursos';

function Cursolista() {

    return(
        <div className="curso-lista">
            <Barra/>
            <button className="btn-create" id="cadastrar-curso"> Cadastrar curso</button>
            <div className="content-page">
                <div className="content-curso-lista">
                    <div className="form-dados">
                        <h1>Cursos</h1>
                        <Cursos method="get" url="/cursos"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cursolista;