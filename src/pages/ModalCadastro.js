import React, {useCallback} from "react";
import {Link, useHistory} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ModalCadastro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:this.props.show
        };
    }
    render() {
        console.log(this.state.showModal);
            return(
                <>
                    <Modal show={this.state.showModal} >
                        <Modal.Header >
                            <Modal.Title>Cadastro realizado com sucesso</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>O curso foi cadastrado com sucesso</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Link to="/curso/listar" >
                                Ok
                            </Link>
                        </Modal.Footer>
                    </Modal>
                </>
            );
    }

}

export default ModalCadastro;

