import React from "react";

import { AreaFooter } from './styled';

import '../../css/all.css';

function Footer(){

    return(
        <AreaFooter>
        <div className="footer">
                <p className="Footer">
                    <p>Desenvolvido por Eduardo Henrique | &copy; 2022</p>
                    <a href="martins.eduardo@aluno.ifsp.edu.br">martins.eduardo@aluno.ifsp.edu.br</a>
                </p>
        </div>
        </AreaFooter>
    );
}

export default Footer;