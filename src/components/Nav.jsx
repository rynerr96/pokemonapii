import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    <nav>
      <Link to='/'> <img className='nav__img' src="/casa.png" alt="" /> </Link>    
    </nav>
  );
};

export default Nav;