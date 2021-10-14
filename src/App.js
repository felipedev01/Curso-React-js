import React, { useEffect, useState } from 'react'

import './App.css';
import Counter from './header';

function App() {
  
  const [Show,setShow]=useState(true)
 

  useEffect(()=>{

    let time=0;

    let timer=setInterval(()=>{

      time++
    
      console.log(time)
    
      if(time>=5){
        clearInterval(timer)
        
        setShow(false)
    
      }
    
      },1000)



  },[])
  

  if(Show){
    return (
      <Counter count={1}></Counter>
    );
  }else{
        
    return(
     <h1>Não há contador</h1>
    )
    
  }
  
}

export default App;
