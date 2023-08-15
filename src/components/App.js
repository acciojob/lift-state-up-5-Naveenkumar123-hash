
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Button from "./Button";

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState('');
  const [status,setStatus]=useState(false)

  function handlingfn(){
    setIsLoggedIn('You are logged in!')
    setStatus(true);
  }
  return (
    <div>
        {
          (!status)&&
          <>
        <h1>Parent Component</h1>
        <Button handlingfn={handlingfn}/>
          </>
        }
          {(status)&&<p>{isLoggedIn}</p>}
    </div>
  )
}

export default App
