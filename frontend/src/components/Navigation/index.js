import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} className='profilebtn'/>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='signup-nav'>Sign Up</NavLink>
      </>
    );
  }
  return (
    <ul>
      <div>
        <NavLink exact to="/" className='home-nav'>
        <img className='logoImage' src='https://photodumpeventsright.s3.us-east-2.amazonaws.com/logo' alt='logo' />
        </NavLink>
        <NavLink exact to='/create' className='create-nav'>Create Event</NavLink>
        {isLoaded && sessionLinks}
      </div>
    </ul>
  );
}

export default Navigation;
