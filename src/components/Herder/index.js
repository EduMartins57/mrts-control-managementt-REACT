import React from "react";
import {Link} from 'react-router-dom'
import Api from '../../Api';

import {AreaHeader } from './styled'

import '../../css/all.css';

function Header(props){

    function handleLogout(){
        Api.logout();
    }

    return(
        <AreaHeader>
        <html>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="container">
                <div className="logo">
                    <img src="../../../logo.png" alt="" class="imgLogo"></img>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/entradas">Inicio</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                    </ul>

                <div className="avatar">
                    <img src={props.user.avatar} alt=""/> 
                    <label>{props.user.name}</label>
                </div>

                    <ul>
                        <li onClick={handleLogout}><i class="fa fa-sign-out"></i></li>
                    </ul>
                </nav>
            </div>
            </html>
        </AreaHeader>
    );
}

export default Header;