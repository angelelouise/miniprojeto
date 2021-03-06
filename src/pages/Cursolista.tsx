import React, {useCallback} from "react";
import '../styles/pages/curso-lista.css';
import '../styles/pages/btn-create.css';
import { useHistory } from 'react-router-dom';
import Barra from '../js/Barra';
import Cursos from '../api/cursos';
import {Form} from "react-bootstrap";

function Cursolista() {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/curso/criar'), [history]);
    return(
        <div className="curso-lista">
            <Barra redirect={"/"}/>
            <button className="btn-create" id="redirect-curso" onClick={handleOnClick}> Cadastrar curso</button>
            <div className="content-page">
                <div className="content-curso-lista">
                    <div className="form-dados">
                        <h1>Cursos</h1>
                        <Form>
                            <Form.Group controlId="formGroupCodigo">
                                <Form.Label>Codigo:</Form.Label>
                                <Form.Control className="form-control form-control-lg" type="int" id="input-codigo" name="codigo"  onChange={()=>{}}/>
                            </Form.Group>
                            <button onClick={()=>{}}>Buscar</button>
                            <button onClick={()=>{}}>Limpar</button>
                            <br/>
                        </Form>
                        <br/>
                        <Cursos method="get" url="/cursos"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cursolista;