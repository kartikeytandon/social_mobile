import React from 'react'
import Home from './components/Main_Routes/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar';
import Orders from './components/Main_Routes/Orders';
import Listings from './components/Main_Routes/Listings';

export default function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/listings' element={<Listings />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}