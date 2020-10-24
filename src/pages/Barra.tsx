import React from "react";
 import '../styles/pages/barra.css';
import logo from "../images/logo192.png";
import {FiArrowLeft} from "react-icons/fi";
import { Link } from 'react-router-dom';

function Barra() {
    return(
        <div className="barra" id="barra-lateral">
            <div className="logo-barra" >
                <img id="logo" src={logo}/>
            </div>
        <div>
            <Link to="/" className="btn" >
                <FiArrowLeft id="btn-voltar" size={26} color="rgba(0,0,0,0.6)"/>
            </Link>
        </div>
        </div>
    );
}

export default Barra;