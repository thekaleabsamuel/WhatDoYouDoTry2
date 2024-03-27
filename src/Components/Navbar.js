import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/upload"><Upload/></Link></li>
        <li><Link to="/form"><Form/></Link></li>
        <li><Link to="/videos"><Videos/></Link></li>
        <li><Link to="/photos"><Photos/></Link></li>
        <li><Link to="/messages"><Messages/></Link></li>
        <li><Link to="/search"><Search/></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;