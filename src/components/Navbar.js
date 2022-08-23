import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src={planet} alt="planet" />
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (
            isActive ? 'active' : null
          )}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className={({ isActive }) => (
            isActive ? 'active' : null
          )}
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (
            isActive ? 'active' : null
          )}
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
