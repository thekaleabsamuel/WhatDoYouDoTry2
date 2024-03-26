import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;