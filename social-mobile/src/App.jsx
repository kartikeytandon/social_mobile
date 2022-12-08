import React from 'react'
import Content from './components/Content'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Content />} />
      </Routes>
    </Router>
  )
}