import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">О проекте</Link>
        <Link to="/posts">Все посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
