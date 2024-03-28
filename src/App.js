import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Upload from './Components/Upload';
import Form from "./Components/Form"
import Videos from './Components/Videos';
import Photos from './Components/Photos';
import Messages from './Components/Messages';
import Search from './Components/Search';
import './App.css';
import Navbar from './Components/Navbar';
// 
function App() {
  const [test,setT]  = useState("")
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/form" element={<Form />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;