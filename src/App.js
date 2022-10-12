import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Herder';
import Footer from './components/Footer';
import Login from './pages/Login';
import RotasPortal from './Routes';
import './App.css';

function App() {
  const [user, setUser] = useState (null);

  const actionLoginDataGoogle = async (u) => {
      let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL,
      }

      setUser(newUser) 
  }

  const actionLoginDataFacebook = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    }

    setUser(newUser) 
  }

  const actionLoginEmailAndPassword= async (u) => {
      // debugger
      let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL,
      }

      setUser(newUser) 
  }

  // debugger
  if (user === null){
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} onReceiveFacebook={actionLoginDataFacebook}  onLoginWithEmailAndPassword={actionLoginEmailAndPassword}/>
    );
  }

  return (
    <BrowserRouter>
      <Header user={user}/>
      
        <RotasPortal />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
