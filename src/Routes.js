/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Saidas from './pages/Saidas';
import Dashboard from './pages/Dashboard';
import Produto from './pages/Produto';
import Cadastro from './pages/Cadastro';
import Fale from './pages/Fale_Conosco';
import Clientes from  './pages/Clientes';
import CadastroSaidas from  './pages/CadastroSaidas';


export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component = { Home } exact path="/entradas">
                    <Home />
                </Route>

                <Route component = { Saidas } exact path="/saidas">
                    <Saidas />
                </Route>

                <Route component = { Dashboard } exact path="/dashboard">
                    <Dashboard />
                </Route>

                <Route component = { Produto } exact path="/produto">
                    <Produto />
                </Route>

                <Route component = { Cadastro } exact path="/cadastro">
                    <Cadastro />
                </Route>

                <Route component = { Fale } exact path="/faleConosco">
                    <Fale />
                </Route>

                <Route component = { Clientes } exact path="/clientes">
                    <Clientes />
                </Route>

                <Route component = { CadastroSaidas } exact path="/cadastroSaidas">
                    <CadastroSaidas />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}