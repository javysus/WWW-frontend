import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Inicio from './Inicio';
import ComoSolicitar from './ComoSolicitar';
import Catalogo from './Catalogo';
function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/comosolicitar" element={<ComoSolicitar/>}></Route>
        <Route path="/catalogo" element={<Catalogo/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter