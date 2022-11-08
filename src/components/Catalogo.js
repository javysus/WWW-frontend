import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import catalogo from '../mocking/catalogo';
import Collapse from 'react-bootstrap/Collapse';

class LibroTableRow extends React.Component {
    state = { expanded: false }
  
    constructor(props) {
        super(props);
    
        this.state = {
          collapseMenu: true
        };
    
        this.showHide = this.showHide.bind(this);
      }
    
      showHide(e) {
        e.preventDefault();
        
        this.setState({
          collapseMenu: !this.state.collapseMenu
        });

        
      }
  
    render() {
      const { libro } = this.props;
      const {index} = this.props;
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
                        <label  style={{fontSize: "16px"}} for="inputLugar" className="col-md-5 col-form-label">Seleccione si desea el libro a domicilio o en sala:</label>
                        <div className="col-sm-3">
                            <select className="form-select" aria-label="Default select example">
                                <option selected value="domicilio">Domicilio</option>
                                <option value="sala">Sala</option>
                            </select>
                        </div>
                    </div>

    

                    <div className="d-grid d-md-flex justify-content-end align-items-center pe-5">
                        <p style={{fontSize: "13px"}} className="align-items-center pe-2">Su libro tendrá fecha de devolución máxima hasta el (fecha a calcular)</p>
                        <button type="submit" className="btn btn-sm btn-primary mb-3 shadow">Agregar</button>
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
                            <div className="p-4 p-lg-5 rounded-3 text-center bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                                <div className="m-4 m-lg-5">
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
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
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