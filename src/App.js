import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import ComoSolicitar from './components/ComoSolicitar';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import Solicitudes from './components/Solicitudes'
import MisSolicitudes from './components/MisSolicitudes';
import MisPrestamos from './components/MisPrestamos';
import Prestamos from './components/Prestamos';
import SolicitudesGestionadas from './components/SolicitudesGestionadas';
import PrestamosCreados from './components/PrestamosCreados';
import AgregarPrestamo from './components/AgregarPrestamo';
import Configuracion from './components/Configuracion';
import Comprobante from './components/Comprobante';

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
          <Route path="/mis-prestamos" element={<MisPrestamos/>}></Route>
          <Route path="/solicitudes-gestionadas" element={<SolicitudesGestionadas/>}></Route>
          <Route path="/prestamos-creados" element={<PrestamosCreados/>}></Route>
          <Route path="/generar-prestamo" element={<AgregarPrestamo/>}></Route>
          <Route path="/configuracion" element={<Configuracion/>}></Route>
          <Route path="/comprobante" element={<Comprobante/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
