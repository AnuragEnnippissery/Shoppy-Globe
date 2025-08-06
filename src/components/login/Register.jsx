import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");
    let navigate=useNavigate();
    async function HandleLogin(){
        console.log("username",username);
        console.log("password",password);

       //let res=
       await fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        //const data = await res.json();
        //console.log(data);

        .then(res => res.json())
        .then(data => {
            console.log("Response from server:", data);
        })
        .catch(err => {
            console.error("Login error:", err);
        });
        navigate('/login')
    
    }
    function HandleCLick(){
        navigate('/login')
    }
    
    return(
        <>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Register</h2>
            <input type="text"id="username" placeholder="username" value={username}
             onChange={(e)=>{setUsername(e.target.value)}} style={{ margin: "10px", padding: "8px" }}></input>
             <br/>
            <input type="text" id="password" placeholder="password" value={password}
             onChange={(e)=>{setPassword(e.target.value)}} style={{ margin: "10px", padding: "8px" }}></input>
             <br/>
            <button onClick={HandleLogin} style={{ margin: "10px", padding: "8px" }}>Register</button>
            <br/>
            <small>Already Have an account ? {" "}
            <button onClick={HandleCLick}  style={{ color: "blue", background: "none",
               border: "none", cursor: "pointer" }}>Login</button>
            </small>
        </div>
        </>
    )
}
export default Register;