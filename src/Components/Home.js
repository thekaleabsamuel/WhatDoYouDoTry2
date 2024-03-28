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
      <div className="title-container">
        <h1 className="what">WhatDoYouDo?</h1>
      </div>
      <Navbar> Navbar </Navbar>
        {/* <ul>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul> */}

      <img className="ipad" src="https://i.postimg.cc/HnMLL9vb/istockphoto-1158686941-612x612-removebg-preview.png" />      
    </div>
  );
}
export default Home;