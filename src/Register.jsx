import React from "react";
import { useState } from "react";

export const Register = (props) => {

        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');

        const handleSubmit = (e) => {
            //to keep the page being reloaded and default empty string passed on every change
            e.preventDefault();
            console.log(email);
            console.log(pass);
        }

    return (
        <div className="auth-form-container">        
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label htmlFor="email">email</label>
                <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value= {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                { <button type="submit" >Register</button> }
            </form>
            <button onClick={() => {props.onFormSwitch('login');}}>Back to Login</button>
        </div>
    )
}