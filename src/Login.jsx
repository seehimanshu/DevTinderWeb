import axios from "axios";
import React, { use } from "react";
import { useState } from "react";

const Login = ()=>{
    const [emailId,setEmailId] = useState("ayush123@gmail.com");
    const [password,setPassword] = useState("Ayush@1243");

    const handleClick = async () =>{
        const res = axios.post("http://localhost:3000/login",{
            emailId,
            password
        })
    }
    return(
        <div className="flex justify-center ">
            <div className="card card-dash bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email ID</legend>
                    <input type="text" className="input" value={emailId} placeholder="Type your email id"
                        onChange={(e)=> setEmailId(e.target.value)} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="text" className="input" value={password} placeholder="Enter your password"
                        onChange={(e)=> setPassword(e.target.value)} />
                    
                </fieldset>
                </div>
                <div className="card-actions justify-center mt-2">
                    <button className="btn btn-primary" onClick={handleClick}>Login</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;