import React from 'react';

import {Link} from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';
import '../../css/dashbord.css'


const Page = () => {
    return(
      <html>
        <body>
            <h1 id="font-text">Dashboard</h1>
            <section class="container">
              <div class="sidenav"> 
                <ul>
                    <li><Link to="/produto">Análise Produtos</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/cadastro">Cadastro Produtos</Link></li>
                    <li><Link to="/entradas">Entrada Produtos</Link></li>
                    <li><Link to="/saidas">Saída Produtos</Link></li>
                    <li><Link to="/cadastroSaidas">Cadastro Saidas</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/faleConosco">Fale Conosco</Link></li> 
                </ul>
              </div>

              <div class="item">
                <iframe title="Controle de Estoque TCC 2022 - Página 1" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNjQzZGQ2NzEtMmI4Ni00NzJlLWJiNGEtNmM5OTA1ZDI5YjBkIiwidCI6IjkxODA4YmQwLTVjNmEtNDlkZi05M2RmLWZiNmE3NDBmNTk0ZCIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>  
              </div>
            </section>
          </body>
      </html>
    );
}

export default Page;