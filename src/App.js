import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trailer from './Trailer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trailer/:description/:trailerLink" element={<Trailer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;