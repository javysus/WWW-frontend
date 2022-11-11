import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import { Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import DatePicker from 'react-datepicker';
import ejemplares_reservados from '../mocking/ejemplares_reservados';

export class AgregarPrestamo extends Component {
    componentDidMount() {
        AOS.init();
    }

    constructor(props) {
        super(props);

        this.state = {
            serviceList: [{ service: "" }],
            open: false,
            startDate: new Date(),
            today: new Date(),
        };

        this.handleServiceChange = this.handleServiceChange.bind(this);
        this.handleServiceRemove = this.handleServiceRemove.bind(this);
        this.handleServiceAdd = this.handleServiceAdd.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleClose = () => this.setState({ open: false });

    handleClick = () => this.setState({ open: true });
    handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.serviceList];
        list[index][name] = value;

        this.setState({
            serviceList: list
        })
        };

    handleServiceRemove = (index) => {
        const list = [...this.state.serviceList];
        list.splice(index, 1);
        this.setState({
            serviceList: list
        })
        };

    handleServiceAdd = () => {
        this.setState({
            serviceList: [...this.state.serviceList, { service: "" }]
        })
    };

    handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    render() {
    return (
        <div>
            <div>
                <div className="container py-0">
                    <div className="p-2 p-lg-3 rounded-3 bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                        <div className="text-left">
                        <Link to="/prestamos"><button type="button" className="btn btn-sm btn-primary px-3 mb-3 shadow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>Volver</button></Link>
                        </div>
                        <div className="m-4 m-lg-5 text-center">
                            <h1 className="display-5 fw-bold">Generar préstamo</h1>
                        </div>

                        <form method="post">

                        <h4>Usuario</h4>
                        <hr></hr>
                            <div className="mb-3 row">
                                <label for="inputRUT" className="col-sm-2 col-form-label">RUT</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="inputRUT"/>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="inputHuella" className="col-sm-2 col-form-label">Huella digital</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputHuella"/>
                                </div>
                            </div>
                        
                        <h4>Préstamo</h4>
                        <hr></hr>
                                
                            <div className="mb-3 row">
                                <label for="inputFecha" className="col-sm-2 col-form-label">Fecha de préstamo</label>
                                <div className="col-sm-9">
                                <DatePicker
                                        showTimeSelect
                                        className='form-control'
                                        minDate= {this.state.today}
                                        selected={ this.state.startDate }
                                        onChange={ this.handleChange }
                                        name="startDate"
                                        dateFormat="MM/dd/yyyy HH:mm:ss"
                                    />
                                </div>
                            </div>
                            
                            <h4>Ejemplares</h4>
                            <hr></hr>

                            {this.state.serviceList.map((singleService, index) => (
                                                <div key={index} className="container">
                                                    <div className="row">
                                                        <div className="col-10 mb-2">
                                                            <div className="d-flex flex-row justify-content-start align-items-center">
                                                            
                                                            <label for="inputAutor" className="form-label me-3">Ejemplar</label>
                                                            

                                                            
                                                            <input type="text" className="form-control me-3" id="inputAutor" list="datalistOptions"/>
                                                            
                                                            <datalist id="datalistOptions">
                                                                        
                                                                    {ejemplares_reservados.data.getEjemplaresByEstado.map((ejemplar, index) => 
                                                                        <option value={ejemplar.id}/>
                                                                    )}
                                                            </datalist>
                                                            
                                                            

                                                            <label for="inputAutor" className="form-label me-3">Lugar</label>

                                                            <select className="form-select me-3" aria-label="Default select example">
                    
                                                            <option selected value="casa">Domicilio</option>
                                                            <option value="multimedia">Sala Multimedia</option>
                                                            <option value="lectura">Sala Lectura</option>
                                                            </select>
                                                            </div>
                                                    {this.state.serviceList.length - 1 === index && (
                                                        <button
                                                        type="button"
                                                        onClick={this.handleServiceAdd}
                                                        className="btn btn-primary btn-sm mt-2 add-btn"
                                                        >
                                                        <span>Agregar</span>
                                                        </button>
                                                    )}
                                                    
                                                    </div>
                                                    <div className="col-2 mb-2 second-division">
                                                    {this.state.serviceList.length !== 1 && (
                                                        <button
                                                        type="button"
                                                        onClick={() => this.handleServiceRemove(index)}
                                                        className="btn btn-outline-danger btn-sm remove-btn"
                                                        >
                                                        <span>Quitar</span>
                                                        </button>
                                                    )}
                                                    </div>
                                                    </div>
                                                </div>
                                                ))}
                            

                            <div className="d-grid d-md-flex justify-content-end pe-5">
                                <button type="button" onClick={this.handleClick} className="btn btn-success mb-3 shadow">Generar</button>
                            </div>
                        </form>
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
            autoHideDuration={2000}
            >
            
            <MuiAlert
                onClose={this.handleClose}
                severity="success"
                elevation={6}
                variant="filled"
            >
                Su préstamo ha sido generado
            </MuiAlert>
        </Snackbar>



        </div>
    )
    }
    }

export default AgregarPrestamo