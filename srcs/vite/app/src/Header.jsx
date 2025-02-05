import React from 'react';
import './Header.css';
import logo from './assets/instageo.png';

const Header = () => {
  return (
    <header className="header">
        <navbar>
          <img src={logo} id="logo"></img>
        </navbar>
    </header>
  );
};

export default Header;
