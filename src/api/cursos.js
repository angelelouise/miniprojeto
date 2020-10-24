import React from 'react';

class Cursos extends React.Component {

    state = {
        cursos: []
    };

    componentDidMount() {

    }

    getCursos(){
        return fetch('http://localhost:3333/cursos/', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cursos: res
                });
            });
    }
    getCurso(codigo){
        return fetch('http://localhost:3333/cursos/codigo/'+codigo, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cursos: res
                });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.cursos.map(item => (
                        <li key={item.id}>
                            <p><b>Codigo:</b> {item.descricao}</p>
                            <p><b>Nome:</b> {item.nome}</p>
                            <p><b>Descricao:</b> {item.descricao}</p>
                            <p><b>Data de criação:</b> {item.data_criacao}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Cursos;