import React from 'react'
import Header from './header'
import './App.css';

function App() {
  return (
    <Header nome="Felipe" links={["Sobre","comprar","contato","Login","Perfil"]}></Header>
  );
}

export default App;
