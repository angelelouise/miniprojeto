import React, {Dispatch, SetStateAction, useCallback} from "react";
import {useHistory, Redirect, RouteComponentProps} from 'react-router-dom';
import Barra from '../js/Barra';
import api from '../api/api';
import ModalCadastro from '../js/ModalCadastro';
import { Form, Modal } from 'react-bootstrap';
import '../styles/pages/curso-cadastro.css';
import '../styles/pages/estrutura-cadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// interface IState {
//     curso?: string,
//     id_curso?: string
//     codigo?: string,
//     nome?: string,
//     descricao?: string,
//     show?: boolean,
//     redirect?: string,
//     validoNome?: boolean,
//     validoCodigo?: boolean,
//     desabilitado?: boolean
// }
// interface IProps {
//     curso?: string,
//     id_curso?: string
// }

class EstruturaCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            curso: this.props.curso.curso,
            id_curso: this.props.curso.id_curso,
            // codigo: '',
            nome: '',
            descricao: '',
            show:false,
            redirect: '/curso/listar',
            validoNome:false,
            // validoCodigo:false,
            desabilitado: true
        }
        // this.setState({
        //     curso: this.props.location.state.curso,
        //     id_curso: this.props.location.state.id_curso,
        // })
        console.log(this.state.curso);
        console.log(this.state.id_curso);
    }

    // componentDidMount(props) {
    //     this.setState({
    //         curso: this.props.location.state.curso,
    //         id_curso: this.props.location.state.id_curso,
    //     })
    // }

    // handleOnClick =()=>{
    //     return useCallback(() => useHistory().push('/estrutura/criar'), [useHistory()]);
    // }
    // handleChangeCodigo = (event) => {
    //     if(!(event.target.value.length ===0)){
    //         this.setState({
    //             codigo: event.target.value,
    //             validoNome: true});
    //
    //     }else{
    //         this.setState({
    //             validoNome: false});
    //     }
    //
    //     if(this.state.validoNome && this.state.validoCodigo){
    //         this.setState({
    //             desabilitado: false});
    //     }
    // }
    handleChangeNome = (event) => {
        event.preventDefault();
        if(!(event.target.value.length ===0)){
            this.setState({
                nome: event.target.value,
                validoCodigo: true});
        }else{
            this.setState({
                validoCodigo: false});
        }

        if(this.state.validoNome){
            this.setState({
                desabilitado: false});
        }

    }
    handleChangeDescricao = (event) => {
        event.preventDefault();
        this.setState({
            descricao: event.target.value,
            });
    }
    redirect=()=>{
        return (<div>
            <Redirect to={'/curso/listar'}/>
        </div>);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.desabilitado){
            this.setState({show: true})
            api.post(`/estruturas/`, {
                id_curso: this.state.id_curso.toString(),
                nome: this.state.nome.toString(),
                descricao: this.state.descricao.toString(),
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    if(res.status === 200 && res.data.success === true)
                    {
                        this.setState({show: true})
                        this.redirect()
                    }
                })
        }
    }
    render() {
        return (
            <div>
                <Barra redirect={"/curso/listar"}/>
                <div id="estrutura-cadastro">
                    <h1 className={"text-display"}>Cadastrar Estrutura Curricular</h1>
                    <p>Curso: {this.state.curso}</p>
                    <Form className="col-sm-10" onSubmit={this.handleSubmit}>
                        {/*<Form.Group controlId="formGroupCodigo">*/}
                        {/*    <Form.Label>Codigo:</Form.Label>*/}
                        {/*    <Form.Control className="form-control form-control-lg" type="int" id="input-codigo"*/}
                        {/*                  name="codigo" onChange={this.handleChangeCodigo}/>*/}
                        {/*    {!this.state.validoNome ?*/}
                        {/*        <span style={{color: "red"}}>Campo obrigatório não informado</span> : ''}*/}
                        {/*</Form.Group>*/}
                        <Form.Group controlId="formGroupNomeEstrutura">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control className="form-control form-control-lg" type="text" id="input-name-estrutura"
                                          name="nome" onChange={this.handleChangeNome}/>
                            {!this.state.validoCodigo ?
                                <span style={{color: "red"}}>Campo obrigatório não informado</span> : ''}
                        </Form.Group>
                        <Form.Group controlId="formGroupDescricaoEstrutura">
                            <Form.Label>Descrição:</Form.Label>
                            <Form.Control className="form-control form-control-lg" type="text" id="input-descricao-estrutura"
                                          name="descricao" onChange={this.handleChangeDescricao}/>
                        </Form.Group>
                        <br/>
                        <br/>
                        <button className="btnC" id="cadastrar-estrutura" type="submit">Cadastrar Estrutura Curricular
                        </button>
                        <Form.Group controlId="formGroupInput">

                        </Form.Group>
                    </Form>

                    {this.state.show ? (<Redirect to={'/curso/listar'}/>) : null}
                </div>
            </div>
        );
    }
}

export default EstruturaCadastro;