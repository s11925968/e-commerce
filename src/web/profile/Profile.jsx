import React, { useContext } from 'react';
import { userContext } from '../context/User';
import './profile.css';

export default function Profile() {
  const { userData } = useContext(userContext);
  console.log(userData);

  return (
    <div className="profile">
      {userData ? (
        <div className='text-center'>
          <h2>{userData.userName}</h2>
        <h3>{userData.email}</h3>
        </div>
        
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
