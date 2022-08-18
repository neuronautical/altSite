import React, {useContext} from 'react';
import { LoginContext } from '../../Contexts/LoginContext';
import './Profile.css';




function Profile() {
    const {username} = useContext(LoginContext);
    console.log(LoginContext)
    console.log({username})

  return (
    <div className="profile">
        <h1> PROFILE</h1>
        <h2> USERNAME:  {username}</h2>

    </div>
  );
}

export default Profile;
