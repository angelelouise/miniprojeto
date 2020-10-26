import React from 'react';
import api from './api';
import Estruturas from "./estruturas";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GrAddCircle} from "react-icons/gr";

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
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th><b>Codigo</b></th>
                            <th><b>Nome</b></th>
                            <th><b>Descricao</b></th>
                            <th><b>Data de criação</b> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    {this.state.cursos.map(item => (
                        <tbody>
                            <tr key={item.id}>
                                <td> {item.codigo}</td>
                                <td> {item.nome}</td>
                                <td> {item.descricao}</td>
                                <td> {item.data_criacao}</td>
                                <td> <GrAddCircle tooltip={"Cadastrar Estruturas"}>add_circle</GrAddCircle> </td>
                            </tr>
                            <tr>
                                <td colspan="4">
                                    <Estruturas method="get" url={`/estruturas/curso/${item.id}`}/>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            );
        }

    }
}

export default Cursos;