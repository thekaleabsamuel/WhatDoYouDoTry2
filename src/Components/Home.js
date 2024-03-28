import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Add this line
import Upload from '../Components/Upload';
import Videos from '../Components/Videos';
import Photos from '../Components/Photos';
import Search from '../Components/Search'; 

function Home() {
  return (
    <div>
      <h1 classname="h11">WhatDoYouDo?</h1>
      <Navbar> Navbar </Navbar>
        <ul>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>
      
    </div>
  );
}

export default Home;