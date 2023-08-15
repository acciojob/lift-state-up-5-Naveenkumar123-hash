import React from "react";

const Button=({handlingfn})=>{

    function sending(){
        handlingfn();
    }
    return(
        <div>
             <label for="name">UserName</label>
             <input type="text"name="name"></input>
             <label for="password">password</label>
             <input type="password"name="password"></input>
             <button onClick={sending}>Login</button>
        </div>
    )
}
export default Button;