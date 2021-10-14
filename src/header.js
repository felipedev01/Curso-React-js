
import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'


function Counter (props){

  const[count, setCount]=useState(props.count)


  useEffect(()=>{

    setCount(parseInt(localStorage.getItem("count")))

    console.log("UseEffect  ativado")
    
    
  },[])

  useEffect(()=>{

  localStorage.setItem("count",count)
  
  return()=>{
    console.log("Não tem mais contador")

  }


  },[count])

  
  
  function add(){

     setCount(count+1)
  }

  return(
    
       
       <div> <h1>Contador : {count}</h1>
          <button onClick={add}>Add</button>
       </div>


  )

}


export default Counter