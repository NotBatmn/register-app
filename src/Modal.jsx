import React from 'react';
import { useState } from 'react';

const Modal = ({open , onClose}) => {

    // state hooks to track username, email, and password
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // define userData object for saving user info
    const userData = {
        username: username,
        email: email,
        pass: pass
    };

    // convert userdata to string object data for use in console log testing
    const data = JSON.stringify(userData);
  
    // validates password to meet criteria of 6 characters, including no spaces, 1 number, 1 special character
    // displays error message if criteria not met, returns password if criteria is met
    function validatePass(pass){
        const regex = /^(?=.*[A-Za-z]){8,}(?=.*\d){1,}(?=.*[.,?!@#$%^&*]){1,}[A-za-z\d.,?!@#$%^&*]{8,}$/;
        // display error message to user if password does not meet criteria
        if(!regex.test(pass)){
            alert('Password must consist of at least 8 characters, including 1 number and 1 special character, no spaces');
            // console.log(pass); for testing
        } else {
            return pass;
        }      
    }

    // validates username is not empty and not already registered
    //displays error message in either case, returns username if it passes criteria
    function validateusername(username){
        if(username==('')){
            alert('username address cannot be empty')
            // console.log(username); for  testing
        }else if (localStorage.getItem(username)) {
            //username already exists,clear fields
            alert('That username already exists');
            setUsername('');            
            setPass('');
            setEmail('');        
        }else {
            return username;
        }
    }

    // validates email is not empty and not already registered
    //displays error message in either case, returns email if it passes criteria
    function validateEmail(email){
        if(email==('')){
            alert('Email address cannot be empty')
            console.log(email);
        }else if (localStorage.getItem(email)) {
            //email already exists, clear fields
            alert('There is a username registered with this email address');
            setUsername('');            
            setPass('');
            setEmail('');        
        }else {
            return email;
        }
    }

    // function handling pressing primary button to submit form with registration info
    // checks for valid username and password, and saves in browser session if passes
    // NOT recommended method for real world cases
    const handleRegSubmit = (e) => {
        // prevents reloading at every change of text boxes
        e.preventDefault();
        // validates username and password
        if(validateEmail(username) && validatePass(pass)){
            // stores in browser local storage
            localStorage.setItem(username, JSON.stringify(userData));            
                alert('Registration Succesful');
                // console.log(data); for testing
                // console.log('The data has been saved to the file!');
                setUsername('');
                setEmail('');
                setPass('');
            };
        //}
    }

    // do not display if not set to open modal to register
    if(!open) return null;

    return (
        
        // html modal structure.  Uses react form for submission
        <div className='overlay' >
            <form className="modalContainer" onSubmit={handleRegSubmit}>            
                <div className = "modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <h2>Create Account</h2>
                        <label htmlFor="username">username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" name="username" className="form-control"/>
                        <p>
                        <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="form-control"/>
                        </p>                        
                        <p>
                        <label htmlFor="password">password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" className="form-control" />  
                        </p>             
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary'>
                            <span className='bold'>Create Account</span>
                        </button>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal