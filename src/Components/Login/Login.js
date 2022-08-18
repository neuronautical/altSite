import React, {useState, useContext} from 'react';
import { LoginContext } from '../../Contexts/LoginContext';
import './Login.css';
import './ResponsiveLogin.css';

function Login() {

  // Grabs setUsername from App.js Wrapper (LoginContext)
  const {setUsername, setShowProfile} = useContext(LoginContext);

  return (
    <div className='submitData'>
    
        <form className='userData'>
          <input 
            placeholder='Enter Your Username: ' 
            type="text" 
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input placeholder='Enter Your Password: ' type="text" />
          <button type='submit' onClick={() => { setShowProfile(true);}}>
              <strong>SUBMIT</strong>
          </button>
        </form>
      
    </div>      
  );
}

export default Login;






