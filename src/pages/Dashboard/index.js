import React from 'react';
import Charts from '../Charts';
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
                <Charts/>  
              </div>
            </section>
          </body>
      </html>
    );
}

export default Page;