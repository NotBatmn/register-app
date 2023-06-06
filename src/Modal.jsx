import React from 'react';
import { useState } from 'react';

const Modal = ({open , onClose}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
   
    const userData = {
        username: username,
        email: email,
        pass: pass
    };

    const data = JSON.stringify(userData);
  
    function validatePass(pass){

        const regex = /^(?=.*[A-Za-z]){8,}(?=.*\d){1,}(?=.*[.,?!@#$%^&*]){1,}[A-za-z\d.,?!@#$%^&*]{8,}$/;
        if(!regex.test(pass)){
            alert('Password must consist of at least 8 characters, including 1 number and 1 special character, no spaces');
            console.log(pass);
        } else {
            return pass;
        }      
    }

    function validateusername(username){
        if(username==('')){
            alert('username address cannot be empty')
            console.log(username);
        }else if (localStorage.getItem(username)) {
            //username already exists
            alert('That username already exists');
            setUsername('');            
            setPass('');
            setEmail('');
        
        }else {
            return email;
        }
    }


    function validateEmail(email){
        if(email==('')){
            alert('Email address cannot be empty')
            console.log(email);
        }else if (localStorage.getItem(email)) {
            //username already exists
            alert('There is a username registered with this email address');
            setUsername('');            
            setPass('');
            setEmail('');
        
        }else {
            return email;
        }
    }

    const handleRegSubmit = (e) => {

        e.preventDefault();

        if(validateEmail(username) && validatePass(pass)){
            localStorage.setItem(username, JSON.stringify(userData));
            
                alert('Registration Succesful');
                console.log(data);
                console.log('The data has been saved to the file!');
                setUsername('');
                setEmail('');
                setPass('');
            };
        //}
    }


    if(!open) return null;

    return (
        
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