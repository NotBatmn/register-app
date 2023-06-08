import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

//simple login app validates username and password, displays a button to create account, and 
//redirects to congratulations page if login is successful
export const Login = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [openModal, setOpenModal] = useState(false);

    // function to handle form submission
    const handleSubmit = (e)=> {

        e.preventDefault();

        //if password is empty, alert
        if(pass == ''){
            alert('Please enter password');
            // if user does not exist
        }else if(!localStorage.getItem(username)) {
            // prompt error
            alert('User does not exist');
        // if it does exist
        } else if(localStorage.getItem(username)){
        //     // match username and password            
        //     //parse to object
            const user = JSON.parse(localStorage.getItem(username));
                console.log(pass);
                console.log(user.pass);       
             //match password element of object
             //if password does not match
             if(user.pass !== pass) {
                //alert mo match
                alert('Password does not match. Please try again');
            //if password does match
             } else if(user.pass === pass) {
                //yay! direct to yay                 
                 console.log('password matched');
                 props.onFormSwitch('dashboard');

             }
        }
            
    }


    return (
        // html structure for login page. uses react form for submission
        <div className="auth-form-container">
            <h5>** Note: This site is for exposition purposes only.  Login info is not secure.**</h5>        
            <form className = "login-form" onSubmit={handleSubmit}>
                <h1>Login</h1> 
                <label htmlFor="username">username</label>
                <input value={username}  onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username" id="username" name="username" />  
                
                <p>
                <label htmlFor="password">password</label>
                <input value= {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                </p>
                <p>
                <button type="submit" >Log In</button>
                </p>
            </form>            
            {/*<button onClick={() => props.onFormSwitch('register')}>oldRegister</button> */}
            <button onClick={() => setOpenModal(true)}>Create Account</button>
            {openModal && createPortal(
                <Modal open={openModal} onClose={() => setOpenModal(false)} />, document.body
            )}
            
 
        </div>   

    )
}