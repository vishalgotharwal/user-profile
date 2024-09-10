import React, { useContext } from 'react';
import { UserContext } from './Context/Context';



const  UserProfile  = ()   => {

  const {user }= useContext(UserContext)

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={user.UserProfile || 'image.png'}  className="card-img-top" alt="User profile" />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{user.email}</li>
          
         
        </ul>
       
      </div>
    </>
  );
};

export default UserProfile;
