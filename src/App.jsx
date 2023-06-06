import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Dashboard } from './Dashboard';
import Modal from './Modal';

function App() {
  //to know which form should be displayed
  //hook const + [state, setState] = useState +('defaultState');
  const [currentForm, setCurrentForm] = useState('login');
 
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">   
      {        //if state of currentform is login, display login, othws display register
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Dashboard onFormSwitch={toggleForm} />
        
      } 
    
    </div>
    
  )
}

export default App
