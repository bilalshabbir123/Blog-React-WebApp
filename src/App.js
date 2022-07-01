import React, { useState, useMemo, useRef } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import User from './component/User';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User/>}/>
          <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

