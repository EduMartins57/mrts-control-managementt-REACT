
import React from 'react';
import Api from '../../Api';

import { Link } from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';
import '../../css/cadastro.css';

const Page = () => {
    function handleSubmit(e) {
        e.preventDefault();

        let data = {
            nome: e.currentTarget[0].value,
            valorProduto: e.currentTarget[1].value,
            validadeProduto: e.currentTarget[2].value,
            quantidade: e.currentTarget[3].value,
            loteProduto: e.currentTarget[4].value
        }

        Api.addProduto(data);
    }
    
    return(
    <html>
        <body>
            <h1 id="font-text">Cadastro de Produtos</h1>
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
                    <p>Cadastro de produtos</p>
                        <label for="nomeProduto" name="nomeProduto" id="nameProduct">Nome </label>
                        <input type="text" name="nomeProduto" id="nomeProduto" placeholder="Digite o nome do produto" />
                            <br />
                        
                        <label for="valorProduto" name="valorProduto" id="valorProduct">Valor </label>
                        <input type="text" name="valorProduto" id="valorProduto" placeholder="Digite o valor do produto" />
                            <br />
                        
                        <label for="email" name="validadeProduto" id="validadeProduct">Validade </label>
                        <input id="validadeProduto" name="validadeProduto" type="date" />
                            <br />
                        
                        <label for="nome" name="quantidade" id="quantidadeProduct">Quantidade </label>
                        <select id="estilo">
                            <option value="">Selecione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>0
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                            <br />

                        <label for="loteProduto" name="loteProduto" id="loteProduct">Lote </label>
                        <select id="estilo">
                            <option value="">Selecione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
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