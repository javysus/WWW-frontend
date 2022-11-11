import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import catalogo from '../mocking/catalogo';
import Collapse from 'react-bootstrap/Collapse';
import DatePicker from "react-datepicker";
import { Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import {Link} from 'react-router-dom';

class LibroTableRow extends React.Component {
    state = { expanded: false }
    today = new Date();
    constructor(props) {
        super(props);
    
        this.state = {
          collapseMenu: true,
          open: false,
          startDate: new Date(),
          today: new Date(),
        };
    
        this.showHide = this.showHide.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    showHide(e) {
    e.preventDefault();
    
    this.setState({
        collapseMenu: !this.state.collapseMenu
    });

    };

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState({ open: false });

    handleClick = () => this.setState({ open: true });

    handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
    onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
    }

    alert(e) {
    e.preventDefault();
    alert("Libro agregado exitosamente");
    }
  
    render() {
      const { libro } = this.props;
      const {index} = this.props;
      
      const { open } = this.state;
      return (
        <>
        <tr key="main" onClick={this.showHide} href="#collapseExample" role="button"
            aria-expanded="false"
            aria-controls="collapseExample">
            <td>{libro.titulo}</td>
            <td>{libro.autor}</td>
            <td>{libro.categoria}</td>
            <td>{libro.ejemplares_disponibles}</td>
            <td>{libro.ejemplares_sala}</td>
        </tr>
        
        
            <tr key={{index}}>
            <td colSpan={5} style={{padding:"0px"}}>
                <Collapse in={!this.state.collapseMenu}>
                    <div>
                <div>
                    <h3>{libro.titulo}</h3>

                    <div class="row align-items-start">
                    <div class="col">
                    <p>
                        <b>Autor:</b> {libro.autor}
                    </p>
                    <p>
                        <b>Editorial:</b> {libro.editorial}
                    </p>
                    <p>
                        <b>Edición:</b> {libro.edicion}
                    </p>
                    <p>
                        <b>Año: </b> {libro.anio}
                    </p>
                    </div>
                    <div class="col">
                    <p>
                        <b>Categoría:</b> {libro.categoria}
                    </p>
                    <p>
                        <b>Tipo:</b> {libro.tipo}
                    </p>
                    <p>
                        <b>Subtipo:</b> {libro.subtipo}
                    </p>
                    </div> 
                </div>

                </div>
                <hr></hr>
                <form>
                    <div className="mb-3 row">
                        <label  style={{fontSize: "16px"}} for="inputLugar" className="col-md-5 col-form-label">Seleccione si desea el libro a domicilio o en sala</label>
                        <div className="col-sm-3 col-md-4">
                            <select className="form-select" aria-label="Default select example">
                                <option selected value="domicilio">Domicilio</option>
                                <option value="sala">Sala</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label  style={{fontSize: "16px"}} for="inputLugar" className="col-md-5 col-form-label">Selecciona la fecha de reserva</label>
                        <div className="col-sm-3 col-md-4"><DatePicker
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

    

                    <div className="d-grid d-md-flex justify-content-end align-items-center pe-5">
                        <p style={{fontSize: "13px"}} className="align-items-center pe-2">Su libro tendrá fecha de devolución máxima hasta el (fecha a calcular)</p>
                        <button onClick={this.handleClick} type="button" className="btn btn-sm btn-primary mb-3 shadow">Agregar</button>
                        <Snackbar
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            open={open}
                            onClose={this.handleClose}
                            autoHideDuration={2000}
                            >
                            
                            <MuiAlert
                                onClose={this.handleClose}
                                severity="success"
                                elevation={6}
                                variant="filled"
                            >
                                Su libro ha sido agregado
                            </MuiAlert>
                        </Snackbar>
                    </div>
                </form>
                </div>
                </Collapse>
            </td>
            </tr>
        </>
      );
    }
  }

export class Catalogo extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <div>
                <header>
                        <div className="container py- 5">
                            <div className="p-2 p-lg-3 rounded-3 bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                                <div className="text-left">
                                    <Link to="/"><button type="button" className="btn btn-sm btn-primary px-3 mb-3 shadow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    </svg>Volver</button></Link>
                                </div>
                                <div className="m-4 m-lg-5 text-center">
                                    <h1 className="display-5 fw-bold">Catálogo</h1>
                                </div>

                                <form method="post">
                                    <div className="mb-3 row">
                                        <label for="inputTitulo" className="col-sm-2 col-form-label">Título</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputTitulo"/>
                                        </div>
                                    </div>

                                    <div className="mb-3 row">
                                        <label for="inputAutor" className="col-sm-2 col-form-label">Autor</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputAutor"/>
                                        </div>
                                    </div>

                                    <div className="mb-3 row">
                                        <label for="inputAutor" className="col-sm-2 col-form-label">Categoría</label>
                                        <div className="col-sm-9">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seleccione la categoría</option>
                                                <option value="literatura">Literatura</option>
                                                <option value="2">Ciencias</option>
                                                <option value="3">Ciencias Sociales</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="d-grid d-md-flex justify-content-end pe-5">
                                        <button type="submit" className="btn btn-primary mb-3 shadow">Buscar</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                </header>

                    <section className="pt-4">
                        <div className="container px-lg-5">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Disponibles</th>
                            <th scope="col">En sala</th>
                            </tr>
                        </thead>
                        <tbody>

                            {catalogo.data.getLibrosCatalogo.map((libro, index) =>
                            <LibroTableRow key={index} index={index + 1} libro={libro}/>
                            )
                            }
                        </tbody>
                        </table>
                        </div>
                    </section>
                </div>
        )
  }
}

export default Catalogo