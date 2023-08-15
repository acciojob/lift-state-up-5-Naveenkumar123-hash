import React from "react";

const Button=({handlingfn})=>{

    function sending(){
        handlingfn();
    }
    return(
        <form>
             <label for="name">UserName</label>
             <input type="text"name="name"></input>
             <label for="password">password</label>
             <input type="password"name="password"></input>
             <button onClick={sending}>Login</button>
        </form>
    )
}
export default Button;