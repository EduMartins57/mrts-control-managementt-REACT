
import React from 'react';
import Api from '../../Api';

import { Link } from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';
import '../../css/clientes.css';

const Page = () => {
    function handleSubmit(e) {
        e.preventDefault();

        let data = {
            CNPJ: e.currentTarget[0].value,
            RazaoSocial: e.currentTarget[1].value,
            emailClientes: e.currentTarget[2].value,
            telClientes: e.currentTarget[3].value
        }

        Api.addCliente(data);
    }
    
    return(
    <html>
        <body>
            <h1 id="font-text">Cadastro de Clientes</h1>
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

                <form class="cadastro-fornecedores" id='cadastroFornecedores' onSubmit={handleSubmit}>
                 
                    <div class="form">
                    <p>Cadastro de clientes</p>
                        <label for="CNPJ" name="CNPJ" id="CNPJ1">CNPJ </label>
                        <input type="text" name="CNPJ" id="CNPJ" placeholder="Digite sua CNPJ" />
                            <br />
                        
                        <label for="RazaoSocial" name="RazaoSocial" id="RazaoSocial1">Razão Social </label>
                        <input type="text" name="RazaoSocial" id="RazaoSocial" placeholder="Digite a Razão Social"/>
                            <br />
                        
                        <label for="email" name="emailClientes" id="emailClientes1">Email </label>
                        <input id="emailClientes" name="emailClientes" placeholder="Digite seu email"/>
                            <br />
                        
                        <label for="email" name="telClientes" id="telClientes1">Telefone </label>
                        <input id="telClientes" name="telClientes" placeholder="Digite seu telefone"/>
                            <br />
                                
                    </div>

                    <div>
                        <button type="submit" value="adicionar">Enviar</button>
                        <button type="submit">Limpar</button>
                    </div>
                </form>
            </section> 
        </body>
    </html>
    );
}

export default Page;