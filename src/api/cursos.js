import React from 'react';
import api from './api';
import Estruturas from "./estruturas";

class Cursos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cursos: [] , url:this.props.url, method:this.props.method, curso:this.props.curso
        };
    }
    componentDidMount() {
        if(this.state.method ==='get'){
            api.get(this.state.url).then((cursosRes)=>{
                this.setState({cursos : cursosRes.data});
            })
        }
    }

    render() {
        if(Object.keys(this.state.cursos).length === 0){
            return (
                <div>
                    <p>Não há cursos cadastrados</p>
                </div>
            );
        }else{
            return (
                <div>
                    <table>
                        <thead>
                        <tr>
                            <td><b>Codigo</b></td>
                            <td><b>Nome</b></td>
                            <td><b>Descricao</b></td>
                            <td><b>Data de criação</b> </td>
                        </tr>
                        </thead>
                        {this.state.cursos.map(item => (
                            <tbody>
                            <tr key={item.id}>
                                <td> {item.codigo}</td>
                                <td> {item.nome}</td>
                                <td> {item.descricao}</td>
                                <td> {item.data_criacao}</td>
                            </tr>
                            <tr>
                                <Estruturas method="get" url={`/estruturas/curso/${item.id}`}/>
                            </tr>
                            </tbody>
                        ))}


                    </table>
                </div>
            );
        }

    }
}

export default Cursos;