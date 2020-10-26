import React from "react";
import books from "../images/books.png";
import aluno from "../images/aluno.png";
import ranking from "../images/ranking1.jpg";
import '../styles/pages/home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div id="page-home">
            <div id="row">
                <div className="column" id="curso">
                    <div className="card">
                        <Link to="/curso/listar">
                            <img className="pic" src={books}></img>
                            <h1>Cursos</h1>
                            <p>Configurar cursos, estruturas currículares e disciplina</p>
                        </Link>
                    </div>
                </div>
                <div className="column" id="aluno">
                    <div className="card">
                        <Link to="">
                            <img className="pic" src={aluno}></img>
                            <h1>Aluno</h1>
                            <p>Gerenciar alunos</p>
                        </Link>
                    </div>
                </div>
                <div className="column" id="recompensas">
                    <div className="card">
                        <Link to="">
                            <img className="pic" src={ranking}></img>
                            <h1>Habilidades e Recompensas</h1>
                            <p>Gerenciar habilidades</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;