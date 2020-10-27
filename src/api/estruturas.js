import React from "react";
import api from './api';
import { Table } from 'react-bootstrap';
import {GrAddCircle} from "react-icons/gr";
import Disciplinas from "./disciplinas";

class Estruturas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estruturas: [], url:this.props.url, method:this.props.method
        };
    }
    componentDidMount() {
        if(this.state.method ==='get'){
            api.get(this.state.url).then((estruturasRes)=>{
                this.setState({estruturas : estruturasRes.data});
            })
        }else if(this.state.method==='post'){

        }
    }

    render() {
        if(Object.keys(this.state.estruturas).length === 0){
            return (
                <Table>
                    <tr><b>Não há estruturas curriculares cadastradas</b></tr>
                </Table>
            );
        }else{
            return (
                <Table responsive>
                    <thead >
                        <tr>
                            <td colspan="4"><b>Estrutura Curriculares</b></td>
                        </tr>
                    </thead>
                    {this.state.estruturas.map(item => (
                        <tbody>
                            <tr key={item.id}>
                                <td> </td>
                                <td> {item.nome}</td>
                                <td> {item.descricao}</td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <Disciplinas method="get" url={`/disciplinas/estrutura/${item.id}`}/>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            );
        }

    }
}

export default Estruturas;