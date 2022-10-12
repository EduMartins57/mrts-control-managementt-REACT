import React from 'react';
import Api from '../../Api';

import {Link} from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';
import '../../css/produto.css';


const Page = () => {

    const [itens, setItens] = React.useState([])
    async function handleClick() {
        let teste = [];
        try {
            teste = await Api.getProdutos()
        } catch (error) {
            console.log(error)
        }finally{
            teste = teste.filter((t) => t.quantidade < 3);
            setItens(teste.sort((a,b) => (a.loteProduto > b.loteProduto) ? 1 : ((b.loteProduto > a.loteProduto) ? -1 : 0)));
        }
    }

    return(
        <html>
            <body>
                <h1 id="font-text">Análise de Produtos</h1>
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

            <main>
                <section class="container-produtos">
                    <div class="item-produtos">
                        <h2>Análise de Produtos</h2>
                        <table id="tabela-desempenho" class="tabela">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Quantidade</td>
                                <td>Valor</td>
                                <td>Data</td>
                            </tr>
                        </thead>
                        <tbody>
                            {itens.map((item) => (
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.valorProduto}</td>
                                    <td>{item.validadeProduto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <button class="btn-estoque" onClick={handleClick}>Verificar Estoque</button>
                    </div>

                </section>
            </main>

                </section>
            </body>
        </html>
    );
}

export default Page;