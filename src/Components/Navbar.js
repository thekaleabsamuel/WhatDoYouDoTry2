import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-around bg-gray-800 p-5">
      <ul className="flex list-none p-0">
        <li className="mx-5"><Link className="text-white no-underline" to="/upload">Upload</Link></li>
        <li className="mx-5"><Link className="text-white no-underline" to="/videos">Videos</Link></li>
        <li className="mx-5"><Link className="text-white no-underline" to="/photos">Photos</Link></li>
        <li className="mx-5"><Link className="text-white no-underline" to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;