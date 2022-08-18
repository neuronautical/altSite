import React, {useState} from 'react';
import './App.css';

import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import { LoginContext } from './Contexts/LoginContext';

function App() {


  // Creating values in parent (app) so child components can access them
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="app">
      
      {/* Wrapper (LoginContext) that  allows for desired values to be access by child components */}
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <Login  />}
      </LoginContext.Provider>

      
    </div>
  );
}

export default App;
