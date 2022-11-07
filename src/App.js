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
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
