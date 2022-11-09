import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export class Prestamos extends Component {
    componentDidMount() {
        AOS.init();
    }

    constructor(props) {
        super(props);
    
        this.state = {
          tabIndex: 0,
          setTabIndex: 0,
        };
    
        this.handleTabChange= this.handleTabChange.bind(this);
    }

    handleTabChange = (event, newTabIndex) => {
        this.setState({
            tabIndex: newTabIndex,
        }
        )
    };
    render() {
    return (
        <div>
            <header>
                <div className="container py-5">
                    <div className="p-4 p-lg-5 rounded-3 text-center bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">Préstamos</h1>

                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-xl-2">
                                <button type="button" className="btn btn-sm btn-primary mb-3 shadow">Agregar</button>
                                </div>

                                <div className="col-lg-4 col-xl-2">
                                <button type="button" className="btn btn-sm btn-primary mb-3 shadow">Devolver</button>
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
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Hora de préstamo</th>
                                    <th scope="col">Hora de devolución</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                    <div className="d-flex align-items-center">
                                        <td className="align-middle">
                                            <div class="form-check-md">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            </div>
                                        </td>
                                        <div className="flex-column ms-4">
                                        <p className="mb-2">Thinking, Fast and Slow</p>
                                        <p className="mb-0">Daniel Kahneman</p>
                                        </div>
                                    </div>
                                    </th>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>Multimedia</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>En sala</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>26/11/2022</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>26/11/2022</p>
                                    </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                            </Box>
                            )}
                            {this.state.tabIndex === 1 && (
                            <Box>
                                <div className="row justify-content-end">
                                    <div className="col-lg-4 col-xl-2">
                                    <button type="button" className="btn btn-sm btn-warning mb-3 shadow">Enviar recordatorio</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col" className="h5">Libro</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Fecha de préstamo</th>
                                    <th scope="col">Fecha de devolución</th>
                    
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                    <div className="d-flex align-items-center">
                                        <td className="align-middle">
                                            <div class="form-check-md">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            </div>
                                        </td>
                                        <div className="flex-column ms-4">
                                        <p className="mb-2">Thinking, Fast and Slow</p>
                                        <p className="mb-0">Daniel Kahneman</p>
                                        </div>
                                    </div>
                                    </th>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>Multimedia</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>26/11/2022</p>
                                    </td>
                                    <td className="align-middle">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>26/11/2022</p>
                                    </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                            </Box>
                            )}
                            {this.state.tabIndex === 2 && (
                            <Box>
                                <Typography>The third tab</Typography>
                            </Box>
                            )}
                        </Box>
                        </Box>
                        
                    </div>
                </div>
                </div>
        </section>
        </div>
    )
  }
}

export default Prestamos