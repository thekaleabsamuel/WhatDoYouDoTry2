// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Home from './Components/Home';
import Messages from './Components/Messages';
import Videos from './Components/Videos';
import Photos from './Components/Photos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes> // Change Switch to Routes
        <Route path="/" element={<Home />} /> // Change component to element
        <Route path="/messages" element={<Messages />} /> // Change component to element
        <Route path="/videos" element={<Videos />} /> // Change component to element
        <Route path="/photos" element={<Photos />} /> // Change component to element
      </Routes>
    </Router>
  );
}

export default App;