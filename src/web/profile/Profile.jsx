import React, { useContext } from 'react'
import { userContext } from '../context/User'
import './profile.css'
export default function Profile() {
  const {userData}=useContext(userContext);
  return (
    <div className="profile">
      <div className='text-center'>
        <div className="profile-image">
          <img src={userData.image.secure_url} />
        </div>
        <div className="info-profile">
          <h2>
            Acoount Name:<br/><span>{userData.userName}</span>
          </h2>
          <h3>
            User Email:<br/><span>{userData.email}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
