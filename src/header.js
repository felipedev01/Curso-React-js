
import React from 'react'
import './App.css'

function Header (props){

  return(
    <header className="header">
    <h1 className="titulo">
      {props.nome}
    </h1>
    <ul className="menu">
    <li>{props.links[0]}</li>
    <li>{props.links[1]}</li>
    <li>{props.links[2]}</li>
    </ul>



   
  </header>


  )

}export default Header