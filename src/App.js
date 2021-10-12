import React from 'react'
import Header from './header'
import './App.css';

function App() {
  return (
    <Header nome="Felipe" links={["about","buy","contato"]}></Header>
  );
}

export default App;
