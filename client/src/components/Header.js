import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return (
    <div className='header'>
      <h1 className='primary-heading'>File Uploader</h1>
      <nav className='nav'>
        <NavLink className="nav-link" activeClassName="active" to="/" exact={true}>Upload</NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/list">Files</NavLink>
      </nav>
    </div>
  );
}

export default Header;
