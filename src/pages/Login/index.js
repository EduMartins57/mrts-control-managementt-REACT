import React from "react";

import Api from '../../Api';

import '../../css/all.css';
import '../../css/login.css';

import {BrowserRouter , Switch, Route, Link, NavLink} from 'react-router-dom';

import {AreaLogin} from './styled';
import {BtnDefaultIcons, BtnDefault} from '../../components/Styled';

import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../Api';

export default ({onReceiveGoogle, onReceiveFacebook , onLoginWithEmailAndPassword}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }

    const actionLoginFacebook = async () => {
        let result = await Api.facebookLogar();

        if(result){
            onReceiveFacebook(result.user);
        }else{
            alert('Error');
        }
    }

    const login = async () => {
        let email = document.getElementById('emailLogin').value;
        let password = document.getElementById('passwordLogin').value;

        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {

    const user = userCredential.user;
            onLoginWithEmailAndPassword(user);
          })
          .catch((error) => {
            alert('Email ou Senha inválidos!');
          });
    }
    
    const signup = async () => {
        let email = document.getElementById('emailRegister').value;
        let password = document.getElementById('passwordRegister').value;
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = '/';
          })
          .catch((error) => {
            let message = '';
            if (error.code === 'auth/weak-password') {
              message = 'A senha deve ter no mínimo 6 caracteres.';
            }
            if (error.code === 'auth/weak-password') {
              message = 'A senha deve ter no mínimo 6 caracteres.';
            }
            if (error.code === 'auth/email-already-in-use') {
              message = 'Este email já pertence a uma conta.';
            }
            alert(`Erro ao criar usuário! ${message}`);
          });
    }

    return (
        <BrowserRouter>
        <Switch>

        <Route path="/registrar">
            <AreaLogin>
                <h1 className="organize">
                    <Link to="/"><FaAngleLeft className="seta"/></Link>
                    Crie sua conta
                </h1>
                <p>Crie sua conta agora!</p>

                <div>
                    <div className="form-imput">
                        <label>E-mail</label>
                        <input type="email" id='emailRegister'></input>
                    </div>

                    <div className="form-imput">
                        <label>Senha</label>
                        <input type="password" id='passwordRegister'></input>
                    </div>

                    <BtnDefault onClick={signup}>Comece Agora!</BtnDefault>

                    <div className="footerLogin">
                        Já tem uma conta?
                        <Link to="/">Login</Link>
                    </div>
                </div>

            </AreaLogin>     
        </Route>
            
        <Route path="/">
            <AreaLogin>
                <h1>Login</h1>
                
                <div>
                    <div className="form-imput">
                        <label>E-mail</label>
                        <input type="email" id='emailLogin'></input>

                        <label>Senha</label>
                        <input type="password" id='passwordLogin'></input>
                    </div>
                    <NavLink to="/entradas" >
                        <BtnDefault onClick={login}>Entrar</BtnDefault>
                    </NavLink>
                </div>

                    <p>ou</p>

                    <BtnDefaultIcons onClick={actionLoginFacebook}>
                        <FaFacebook />
                        <div className="center" ><Link to="/entradas">Logar com Facebook</Link></div>
                    </BtnDefaultIcons>

                    <BtnDefaultIcons onClick={actionLoginGoogle}>
                        <FaGoogle />
                        <div className="center"><Link to="/entradas">Logar com Google</Link></div>                     
                    </BtnDefaultIcons>

                    <div className="footerLogin">
                        Não tem uma conta?
                        <Link to="/registrar">Registre-se</Link>
                    </div>
            </AreaLogin>

        </Route>
        </Switch>

        </BrowserRouter>
    );
}




