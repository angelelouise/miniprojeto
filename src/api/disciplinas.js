import React from "react";
import api from './api';
import { Table } from 'react-bootstrap';
import {GrAddCircle} from "react-icons/gr";

class Disciplinas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disciplinas: [], url:this.props.url, method:this.props.method
        };
    }
    componentDidMount() {
        if(this.state.method ==='get'){
            api.get(this.state.url).then((disciplinasRes)=>{
                this.setState({disciplinas : disciplinasRes.data});
            })
        }
    }

    render() {
        if(Object.keys(this.state.disciplinas).length === 0){
            return (
                <Table>
                    <tr><b>Não há disciplinas cadastradas</b></tr>
                </Table>
            );
        }else{
            return (
                <Table className="table-white" style={ { color: 'black' } }>
                    <thead className="thead-dark ">
                    <tr>
                        <td colspan="3"><b>Disciplinas</b></td>
                    </tr>
                    </thead>
                    {this.state.disciplinas.map(item => (
                        <tbody>
                        <tr key={item.id}>
                            <td> </td>
                            <td> {item.ano}</td>
                            <td> {item.nome}</td>
                        </tr>
                        </tbody>
                    ))}
                </Table>
            );
        }

    }
}

export default Disciplinas;