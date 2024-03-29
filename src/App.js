import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Competitions from './pages/Competitions';
import Workshops from './pages/Workshops';
import Home from './pages/Home';
import Talks from './pages/Talks';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      {/* <Landing text="EXERGY$ECHOES OF EXOTHERMIA" /> */}
      <Routes>
        <Route path='/Exergy-2024' element={<Home />} />
        <Route path='/Exergy-2024/competitions' element={<Competitions />} />
        <Route path='/Exergy-2024/workshops' element={<Talks />} />
        <Route path='/Exergy-2024/talks' element={<Talks />} />
        <Route path='/Exergy-2024/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App;
