import React from "react";
import api from './api';

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
            <div>
                <p>Não há estruturas currículares cadastradas</p>
            </div>
            );
        }else{
            return (
                <table>
                    <tr>Estrutura Currículares</tr>
                    <tr>
                        <td><b>Codigo</b></td>
                        <td><b>Nome</b></td>
                        <td><b>Descricao</b></td>
                    </tr>
                    {this.state.estruturas.map(item => (
                        <tr key={item.id}>
                            <td> {item.descricao}</td>
                            <td> {item.nome}</td>
                            <td> {item.descricao}</td>
                        </tr>
                    ))}
                </table>
            );
        }

    }
}

export default Estruturas;