import React from 'react';
import api from './api';
import Estruturas from "./estruturas";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GrAddCircle} from "react-icons/gr";
import EstruturaCadastro from "../pages/EstruturaCadastro";
import {Redirect, withRouter, Link } from "react-router-dom";

class Cursos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cursos: [] , url:this.props.url, method:this.props.method, curso:this.props.curso, show:false
        };
    }
    componentDidMount() {
        if(this.state.method ==='get'){
            api.get(this.state.url).then((cursosRes)=>{
                this.setState({cursos : cursosRes.data});
            })
        }
    }
    redirectCadastrarEstrutura(nome,id){
        // this.setState({
        //     show: true
        // })
        // return (<div>
        //     {this.state.show ? (<EstruturaCadastro curso={nome} id_curso={id}/>):null}
        // </div>);
        // this.props.history.push('/estrutura/criar')
        return (
            <Redirect to={{pathname:'/estrutura/criar', curso:{nome}, id_curso:{id}}} />
        )
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
                                <td >
                                    <Link to={{pathname:'/estrutura/criar', curso:`${item}`}} >
                                        <GrAddCircle tooltip={"Cadastrar Estruturas"} >add_circle</GrAddCircle>
                                    </Link>
                                </td>
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