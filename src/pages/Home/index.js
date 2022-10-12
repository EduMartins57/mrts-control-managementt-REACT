import Api from '../../Api';
import React from 'react';

import {Link} from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';


const Page = () => {
    const [itens, setItens] = React.useState([])
    React.useMemo(async () => {
        let teste = [];
        try {
            teste = await Api.getProdutos()
        } catch (error) {
            console.log(error)
        }finally{
            setItens(teste.sort((a,b) => (a.loteProduto > b.loteProduto) ? 1 : ((b.loteProduto > a.loteProduto) ? -1 : 0)));
        }
    }, [])

    return(
        <html>
            <body>
                <h1 id="font-text">Entradas de Produtos </h1>
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
                    <h2>Entradas de Produtos</h2>
                    <table id="tabela-desempenho" class="tabela">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Lote</td>
                                <td>Valor</td>
                                <td>Total</td>
                                <td>Data</td>
                            </tr>
                        </thead>
                        <tbody>
                            {itens.map((item) => (
                                <tr>
                                    <td>{item.nome}</td>                                 
                                    <td>{item.loteProduto}</td>
                                    <td>{item.quantidade}</td>                                  
                                    <td>{item.validadeProduto}</td>   
                                    <td>{item.valorProduto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </section>
            </body>
        </html>
    );
}

export default Page;