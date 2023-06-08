import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './Login';
import { Dashboard } from './Dashboard';

function App() {

  // change title displayed in browswer tab to Login App
  useEffect(() =>{
    document.title='Login App';
  }, []);
  //to know which form should be displayed
  //hook const + [state, setState] = useState +('defaultState');
  const [currentForm, setCurrentForm] = useState('login');
 
  //switches between forms
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">   
      {        //if state of currentform is login, display Login, othws display Dashboard
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Dashboard onFormSwitch={toggleForm} />
        
      } 
    
    </div>
    
  )
}

export default App
