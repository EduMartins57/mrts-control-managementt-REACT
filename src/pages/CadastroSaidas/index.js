import Api from '../../Api';
import React from 'react';

import {Link} from 'react-router-dom';

import '../../css/all.css';
import '../../css/index.css';
import '../../css/cadastroSaidas.css';


const Page = () => {
    const [itens, setItens] = React.useState([])
    React.useMemo(async () => {
        let teste = [];
        try {
            teste = await Api.getProdutos()
        } catch (error) {
            console.log(error)
        }finally{
            console.log(teste)
            setItens(teste);
            setItens(teste.sort((a,b) => (a.loteProduto > b.loteProduto) ? 1 : ((b.loteProduto > a.loteProduto) ? -1 : 0)));
        }
    }, [])

    async function handleClose(item){
        //debugger
        let qtdSaida = document.getElementById(item.id).value;
        item.quantidade -= qtdSaida;
        await Api.addSaida(item)
    }

    return(
        <html>
            <body>
                <h1 id="font-text">Cadastro Saidas </h1>
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
                    <h2>Produtos</h2>
                    <table id="tabela-desempenho" class="tabela">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Lote</td>
                                <td>Valor</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {itens.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>                                 
                                    <td>{item.loteProduto}</td>
                                    <td>{item.valorProduto}</td>
                                    <td><input id={item.id} type='number' placeholder={'Max: '+item.quantidade} max={item.quantidade}/></td>                                  
                                    <td id='Max'><button type="button" value={item} onClick={() => handleClose(item)}>Retirada</button></td>   
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