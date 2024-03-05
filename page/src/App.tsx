import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/pagina1' element={<Home />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
