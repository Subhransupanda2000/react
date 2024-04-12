import React from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/TextForm" element={<TextForm />} />
        </Routes>
      
    </Router>
  );
}

export default App;
