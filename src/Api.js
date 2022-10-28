import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import {addDoc, collection, getDocs, query, setDoc, doc, deleteDoc} from 'firebase/firestore';
import {signOut } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth  = getAuth();



// eslint-disable-next-line import/no-anonymous-default-export
export default {

    // Cadastro de Novos Entradas
    getEntradas: async () => {
        let data = [];
        try {
            let array = await getDocs(query(collection(db, 'itens')))
            array.forEach((item) => data.push(item.data()))
        } catch (error) {
            console.log(error)
        }
        return data;
    },

    // Logout no sistema
    logout: async () => {

        try {
            await signOut(auth)
            window.location.href = '/'; 
        } catch (error) {
            console.log(error)
        }
            
    },

    // Cadastro de Novos Produtos
    getProdutos: async () => {
        let data = [];
        try {
            let array = await getDocs(query(collection(db, 'itens')))
            array.forEach((item) => data.push(item.data()))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        return data;
    },

    addProduto: async (data) => {
        try {
            await setDoc(doc(db, 'itens', String(data.id)), data)
        } catch (error) {
            console.log(error)
        }
    },

    deleteProduto: async (data) => {
        try {
            await deleteDoc(doc(db, 'itens', String(data.id)))
        } catch (error) {
            console.log(error)
        }
    },

    // Cadastro de Saidas de Produtos
    addSaida: async (data) => {
        try {
            //debugger
            await addDoc(collection(db, 'saida'), data)
            await setDoc(doc(db, 'itens', String(data.id)), data)
        } catch (error) {
            console.log(error)
        }
    },

    // Cadastro de Novos Clientes
    getCliente: async () => {
        let data = [];
        try {
            let array = await getDocs(query(collection(db, 'itens')))
            array.forEach((cliente) => data.push(cliente.data()))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        return data;
    },

    addCliente: async (data) => {
        try {
            await addDoc(collection(db, 'cliente'), data)
        } catch (error) {
            console.log(error)
        }
    },

    // Cadastro da Saída de produtos
    getSaidaP: async () => {
        let data = [];
        try {
            let array = await getDocs(query(collection(db, 'produtoSaida')))
            array.forEach((produtoSaida) => data.push(produtoSaida.data()))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        return data;
    },

    addSaidaP: async (data) => {
        try {
            await addDoc(collection(db, 'produtoSaida'), data) 


        } catch (error) {
            console.log(error)
        }
    },

    // Cadastro do Fale Conosco
    getFale: async () => {
        let data = [];
        try {
            let array = await getDocs(query(collection(db, 'itens')))
            array.forEach((fale) => data.push(fale.data()))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        return data;
    },

    addFale: async (data) => {
        try {
            await addDoc(collection(db, 'fale'), data)
        } catch (error) {
            console.log(error)
        }
    },

    // Autenticação com a Google
    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    },

    // Autenticação com a Facebook
    facebookLogar: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    },

}





