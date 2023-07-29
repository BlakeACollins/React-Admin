/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './navbar.css'
import Logo from '../../assets/logo.svg';
import Search from '../../assets/search.svg'
import App from '../../assets/app.svg'
import Expand from '../../assets/expand.svg'
import Settings from '../../assets/settings.svg'
import Notification from '../../assets/notifications.svg'


const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt='admin logo' />
        <span>React Admin</span>
      </div>
      <div className='icons'>
        <img src={Search} alt='' className='icon' />
        <img src={App} alt='' className='icon' />
        <img src={Expand} alt='' className='icon' />
        <div className='notification'>
          <img src={Notification} alt='' />
          <span>1</span>
        </div>
        <div className='users'>
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt='profile picture' />
          <span>April</span>
        </div>
        <img src={Settings} alt='' className='icon' />
        
      </div>
    </div>
   
  );
};
export default Navbar;