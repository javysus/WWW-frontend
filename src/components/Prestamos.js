import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DevolucionPrestamo from './DevolucionPrestamo';
import {Link} from 'react-router-dom';
import { Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import prestamos_casa from '../mocking/prestamos_vencidos_casa';
import prestamos_sala from '../mocking/prestamos_vencidos_sala';
import moment from 'moment';

export class Prestamos extends Component {
    componentDidMount() {
        AOS.init();
    }

    constructor(props) {
        super(props);
    
        this.state = {
          tabIndex: 0,
          open: false,
          setTabIndex: 0,
        };
    
        this.handleTabChange= this.handleTabChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.calcularFecha = this.calcularFecha.bind(this);
    }

    calcularFecha = (fecha) => {
        return moment(fecha).format('MMM DD YYYY, h:mm:ss a');
    } 
    handleTabChange = (event, newTabIndex) => {
        this.setState({
            tabIndex: newTabIndex,
        }
        )
    };

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState({ open: false });

    handleClick = () => this.setState({ open: true });
    render() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="p-2 p-lg-3 rounded-3 bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                        <div className="text-left">
                            <Link to="/"><button type="button" className="btn btn-sm btn-primary px-3 mb-3 shadow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>Volver</button></Link>
                        </div>
                        <div className="m-4 m-lg-5 text-center">
                            <h1 className="display-5 fw-bold">Préstamos</h1>

                            <div className="row justify-content-center">
                                
                                <div className="col-lg-4 col-xl-2">
                                <Link to="/generar-prestamo"><button type="button" className="btn btn-sm btn-primary mb-3 shadow">Generar</button></Link>
                                </div>

                                <div className="col-lg-4 col-xl-2">
                                <button type="button" href="#devolucion" data-bs-target="#devolucion" data-bs-toggle="modal" className="btn btn-sm btn-primary mb-3 shadow">Devolver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <Box>
                        <Box>
                            <Tabs value={this.state.tabIndex} onChange={this.handleTabChange} variant="fullWidth">
                            <Tab className="fw-bold" label="Préstamos vencidos en sala" />
                            <Tab className="fw-bold" label="Préstamos vencidos en domicilio" />
                            </Tabs>
                        </Box>
                        <Box sx={{ padding: 2 }}>
                            {this.state.tabIndex === 0 && (
                            <Box>
                                

                                <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col" className="h5">Libro</th>
                                    <th scope="col">Ejemplar</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Hora de préstamo</th>
                                    <th scope="col">Hora de devolución</th>
                                    <th scope="col">Horas vencido</th>
                                    <th scope="col"></th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {prestamos_sala.data.getPrestamosVencidos.map((prestamo, index) =>
                                    <tr key={index}>
                                    <th scope="row">
                                    <div className="d-flex align-items-center">
                                        
                                        <div className="flex-column ms-4">
                                        <p className="mb-2">{prestamo.titulo}</p>
                                        <p className="mb-0">{prestamo.autor}</p>
                                        </div>
                                    </div>
                                    </th>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.ejemplar}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.lugar}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{this.calcularFecha(prestamo.fecha_prestamo)}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{this.calcularFecha(prestamo.fecha_devolucion)}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.duration} {prestamo.unit}</p>
                                    </td>
                                    <td className="align-middle">
                                    <Link to="/comprobante"><button type="button" className="btn btn-sm btn-secondary my-2 shadow">Ver comprobante</button></Link>
                                    </td>
                                </tr>
                                )}
                                
                                
                                </tbody>
                            </table>
                        </div>
                            </Box>
                            )}
                            {this.state.tabIndex === 1 && (
                            <Box>
                                <table className="table table-hover">
                                
                                <tr>
                                <td colSpan={4}>
                                <div className="row justify-content-between">
                                    
                                    <div className="col-lg-4 col-xl-2">
                                    <input className="form-check-input" type="checkbox" value="" id="selectall"/>
                                    <label className='px-2'>Seleccionar todo</label>
                                    </div>

                                    <div className="col-lg-4 col-xl-2">
                                    <button type="button" onClick = {this.handleClick} className="btn btn-sm btn-warning mb-3 shadow">Enviar recordatorio</button>
                                    </div>
                                    
                                    
                                </div>
                                </td>
                                </tr>
                                
                                </table>
                                
                                <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col" className="h5">Libro</th>
                                    <th scope="col">Ejemplar</th>
                                    <th scope="col">Fecha de préstamo</th>
                                    <th scope="col">Fecha de devolución</th>
                                    <th scope="col">Días vencido</th>
                                    <th scope="col"></th>
                    
                                </tr>
                                </thead>
                                <tbody>
                                
                                {prestamos_casa.data.getPrestamosVencidos.map((prestamo, index) =>
                                    <tr>
                                    <th scope="row">
                                    <div className="d-flex align-items-center">
                                        <td className="align-middle">
                                            <div class="form-check-md">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            </div>
                                        </td>
                                        <div className="flex-column ms-4">
                                        <p className="mb-2">{prestamo.titulo}</p>
                                        <p>{prestamo.autor}</p>
                                        </div>
                                    </div>
                                    </th>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.ejemplar}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{this.calcularFecha(prestamo.fecha_prestamo)}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{this.calcularFecha(prestamo.fecha_devolucion)}</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.duration} {prestamo.unit}</p>
                                    </td>
                                    <td className="align-middle">
                                    <Link to="/comprobante"><button type="button"  className="btn btn-sm btn-secondary my-2 shadow">Ver comprobante</button></Link>
                                    </td>
                                </tr>
                                )}

                                
                                </tbody>
                            </table>
                        </div>
                            </Box>
                            )}
                            
                        </Box>
                        </Box>
                        
                    </div>
                </div>
                </div>
                <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                open={this.state.open}
                onClose={this.handleClose}
                autoHideDuration={3000}
                >
                
                <MuiAlert
                    onClose={this.handleClose}
                    severity="success"
                    elevation={6}
                    variant="filled"
                >
                    Recordatorios enviados exitosamente
                </MuiAlert>
            </Snackbar>
        <DevolucionPrestamo/>
        </section>

        </div>
    )
  }
}

export default Prestamos