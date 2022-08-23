import React from 'react'
import planet from '../images/planet.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <img src={planet} alt="planet" />
      <NavLink
        to='/'
        className={({ isActive }) => (
          isActive ? "active" : null
        )}
      >
        Profile
      </NavLink>
    </>
  )
}

export default Navbar;
