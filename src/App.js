import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
