import React from 'react'

const Profile = () => {
  return (
    <div className='profile-page'>
      <div className="profile">
        <span className='setting'>Account Settings</span>
        <div className="user">
          <div className='user-wrap'>
            <div className='profile-picture'>
            <img src="/images/download.jpg" alt="profile-picture" />
            </div>
            <div className='username'>
              <h5>Marry Doe</h5>
              <span>Marry@gmail.com</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis repudiandae mollitia, repellendus explicabo ut reiciendis similique dolore</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
