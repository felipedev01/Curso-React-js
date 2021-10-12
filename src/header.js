
import React from 'react'
import './App.css'
import Menu from './Menu'

function Header (props){

  return(
    <header className="header">
    <h1 className="titulo">
      {props.nome}
    </h1>
  
    <Menu links={props.links}>

    </Menu>

   
  </header>


  )

}export default Header