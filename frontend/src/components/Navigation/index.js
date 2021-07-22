import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const { user } = useSelector((state) => state.session);
  const history = useHistory();

  const handleCreateClick = (event) => {
    if (!user) {
      history.push(`/signup`);
    } else {
      history.push(`/create`);
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} className='profilebtn' />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <button className='signupBtn'>
          <a href='/signup'>
            Sign Up
          </a>
        </button>
        {/* <NavLink to="/signup" className='signup-nav'>Sign Up</NavLink> */}
      </>
    );
  }
  return (
    <ul>
      <div>
        <NavLink exact to="/" className='home-nav'>
          <img className='logoImage' src='https://photodumpeventsright.s3.us-east-2.amazonaws.com/large.png' alt='logo' />
        </NavLink>
        <button className='createBtn' onClick={e => handleCreateClick(e)}>
          Create Event
          {/* <a href='/create'>
            Create Event
          </a> */}
        </button>
        {/* <NavLink exact to='/create' className='create-nav'>Create Event</NavLink> */}
        {isLoaded && sessionLinks}
      </div>
    </ul>
  );
}

export default Navigation;
