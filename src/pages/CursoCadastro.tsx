import React, {Dispatch, SetStateAction, useCallback} from "react";
import { useHistory } from 'react-router-dom';
import Barra from '../js/Barra';
import api from '../api/api';
import {Curso} from "../modelos/curso";
import ModalCadastro from '../js/ModalCadastro';
import { Form, Button } from 'react-bootstrap';
import '../styles/pages/curso-cadastro.css';
// import '../styles/pages/btn-create.css';

class CursoCadastro extends React.Component<Curso> {

    state = {
        codigo: '',
        nome: '',
        descricao: '',
        data_criacao: '',
        show:false,
        redirect: '/curso/listar',
        validoNome:false,
        validoCodigo:false,
        desabilitado: true
    }

    handleOnClick =()=>{
        return useCallback(() => useHistory().push('/curso/criar'), [useHistory()]);
    }
    handleChangeCodigo = (event: { target: { value: string; }; }) => {
        const hoje = new Date()
        if(!(event.target.value.length ===0)){
            this.setState({
                codigo: event.target.value,
                data_criacao: hoje.toLocaleString("pt-BR"),
                validoNome: true});

        }else{
            this.setState({
                validoNome: false});
        }

        if(this.state.validoNome && this.state.validoCodigo){
            this.setState({
                desabilitado: false});
        }
    }
    handleChangeNome = (event: { target: { value: string; }; }) => {
        const hoje = new Date()
        if(!(event.target.value.length ===0)){
            this.setState({
                nome: event.target.value,
                data_criacao: hoje.toLocaleString("pt-BR"),
                validoCodigo: true});
        }else{
            this.setState({
                validoCodigo: false});
        }

        if(this.state.validoNome && this.state.validoCodigo){
            this.setState({
                desabilitado: false});
        }

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
        if(!this.state.desabilitado){
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
    }
    render() {
        return(
            <div >

                <Barra redirect={"/curso/listar"}/>
                <div id="curso-cadastro">
                    <h1 className={"text-display"}>Cadastrar Curso</h1>
                    <Form className="col-sm-10" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupCodigo">
                            <Form.Label>Codigo:</Form.Label>
                            <Form.Control className="form-control form-control-lg" type="int" id="input-codigo" name="codigo" onChange={this.handleChangeCodigo} />
                            {!this.state.validoNome ? <span style={{color: "red"}}>Campo obrigatório não informado</span> : ''}
                        </Form.Group>
                        <Form.Group controlId="formGroupCodigo">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control className="form-control form-control-lg" type="text" id="input-name" name="nome" onChange={this.handleChangeNome} />
                            {!this.state.validoCodigo ? <span style={{color: "red"}}>Campo obrigatório não informado</span> : ''}
                        </Form.Group>
                        <Form.Group controlId="formGroupDescricao">
                            <Form.Label>Descrição:</Form.Label>
                            <Form.Control className="form-control form-control-lg" type="text" id="input-descricao" name="descricao"  onChange={this.handleChangeDescricao}/>
                        </Form.Group>
                        <br />
                        <br />
                        <button className="btnC" id="cadastrar-curso" type="submit" >Cadastrar curso</button>
                        <Form.Group controlId="formGroupInput">

                        </Form.Group>
                    </Form>

                    {this.state.show ? (<ModalCadastro show={true}/>) :null}
                </div>
            </div>
        );
    }
}

export default CursoCadastro;