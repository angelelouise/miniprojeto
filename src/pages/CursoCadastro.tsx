import React, {Dispatch, SetStateAction, useCallback} from "react";
import '../styles/pages/btn-create.css';
import { useHistory } from 'react-router-dom';
import Barra from './Barra';
import api from '../api/api';
import {Curso} from "../modelos/curso";
import ModalCadastro from './ModalCadastro';

class CursoCadastro extends React.Component {

    state = {
        codigo: '',
        nome: '',
        descricao: '',
        data_criacao: '',
        show:false
    }

    handleOnClick =()=>{
        return useCallback(() => useHistory().push('/curso/criar'), [useHistory()]);
    }
    handleChangeCodigo = (event: { target: { value: string; }; }) => {
        const hoje = new Date()

        this.setState({
            codigo: event.target.value,
            data_criacao: hoje.toLocaleString("pt-BR")});
    }
    handleChangeNome = (event: { target: { value: string; }; }) => {
        const hoje = new Date()

        this.setState({
            nome: event.target.value,
            data_criacao: hoje.toLocaleString("pt-BR")});
    }
    handleChangeDescricao = (event: { target: { value: string; }; }) => {
        const hoje = new Date()

        this.setState({
            descricao: event.target.value,
            data_criacao: hoje.toLocaleString("pt-BR")});
    }
    showModal=()=>{
        return (<div>
            <ModalCadastro show={this.state.show}/>
        </div>);
    }
    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        this.setState({show: true})
        api.post(`/cursos`, {
                nome: this.state.nome.toString(),
                descricao: this.state.descricao.toString(),
                data_criacao: this.state.data_criacao.toString(),
                codigo: this.state.codigo.toString()
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.status === 200 && res.data.success === true)
                {
                    this.setState({show: true})
                    this.showModal()
                }
            })

    }
    render() {
        return(
            <div className="curso-lista">
                <Barra/>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Codigo:
                            <input type="int" id="input-codigo" name="codigo" onChange={this.handleChangeCodigo} />
                        </label>
                        <label>
                            Nome:
                            <input type="text" id="input-name" name="nome" onChange={this.handleChangeNome} />
                        </label>
                        <label>
                            Descrição:
                            <input type="text" id="input-descricao" name="descricao"  onChange={this.handleChangeDescricao}/>
                        </label>
                        <button className="btn-create" id="cadastrar-curso" type="submit" > Cadastrar curso</button>
                    </form>
                    {this.state.show ? (<ModalCadastro show={true}/>) :null}
                </div>
            </div>
        );
    }
}

export default CursoCadastro;