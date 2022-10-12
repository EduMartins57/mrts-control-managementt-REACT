import React from 'react';
import Api from '../../Api';

import {Link} from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';
import '../../css/fale_conosco.css';


const Page = () => {
    function handleSubmit(e) {
        e.preventDefault();

        let data = {
            nome: e.currentTarget[0].value,
            sobrenome: e.currentTarget[1].value,
            email: e.currentTarget[2].value,
            ddd: e.currentTarget[3].value,
            textareamsg: e.currentTarget[4].value
        }

        Api.addFale(data);
    }
    return(
        <html>
            <body>
            <h1 id="font-text">Fale Conosco</h1>
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

                <form class="textfield" onSubmit={handleSubmit}> 
                    <div class="form">
                        <p>Fale Conosco</p>
                        <label for="nome" id="nameFale">Nome </label>
                        <input type="text" name="nome" id="nomeFale" placeholder="Digite seu nome" />
                        <br />
                        
                        <label for="sobrenome" id="sobreFale">Sobrenome </label>
                        <input type="text" name="sobrenome" id="sobrenomeFale" placeholder="Digite seu sobrenome"/>  
                        <br />

                        <label for="email" id="emailFale">Email </label>
                        <input type="email" name="email" id="emailNome" placeholder="Digite seu email"/>
                        <br />

                        <label for="contato" id="contactFale">Telefone </label>
                        <input type="text" name="ddd" id="ddd2" placeholder="Digite seu número" />
                        <br />

                        <label for="mensagem" id="msgFale">Mensagem</label>
                        <textarea name="textareamsg" id="textareamsg"></textarea>
                </div>

                <div>
                    <button type="submit"  value="adicionar" onClick="adicionar()">Enviar </button>
                    <button type="submit">Limpar</button>
                </div>
                </form>
                
                </section>
            </body>
        </html>
    );
}

export default Page;