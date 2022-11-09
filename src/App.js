import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import AppRouter from './components/AppRouter';
import ComoSolicitar from './components/ComoSolicitar';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import Solicitudes from './components/Solicitudes'
import MisSolicitudes from './components/MisSolicitudes';
import Prestamos from './components/Prestamos';

class App extends React.Component {
  render() {
    return(
      /*<div>
      <AppRouter/>
      <NavBar/>
      </div>*/

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/como-solicitar" element={<ComoSolicitar/>} />
          <Route path="/catalogo" element={<Catalogo/>}></Route>
          <Route path="/carrito" element={<Carrito/>}></Route>
          <Route path="/solicitudes" element={<Solicitudes/>}></Route>
          <Route path="/prestamos" element={<Prestamos/>}></Route>
          <Route path="/mis-solicitudes" element={<MisSolicitudes/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
