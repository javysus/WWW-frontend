import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import prestamos from '../mocking/prestamos';
import moment from 'moment';
class PrestamosCreados extends React.Component{
    componentDidMount() {
        AOS.init();
    }

    constructor(props) {
        super(props);
    
        this.calcularFecha = this.calcularFecha.bind(this);
      }
  
    calcularFecha = (fecha) => {
        return moment(fecha).format('MMM DD YYYY, h:mm:ss a');
    } 
    render() {
        return(
            <div>
            <div className="container py-0">
                <div className="p-2 p-lg-3 rounded-3 bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                    <div className="text-left">
                        <Link to="/"><button type="button" className="btn btn-sm btn-primary px-3 mb-3 shadow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>Volver</button></Link>
                    </div>
                    <div className="m-4 m-lg-5 text-center">
                        <h1 className="display-5 fw-bold">Préstamos creados</h1>
                    </div>
                    <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col" className="h5">Ejemplar</th>
                                <th scope="col">Fecha de prestamo</th>
                                <th scope="col">Fecha de retorno</th>
                                <th scope="col">Fecha devuelto</th>
                                <th scope="col">Lugar</th>
                                <th scope="col">Usuario</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {prestamos.data.getPrestamosByBibliotecario.map((prestamo, index) =>
                            <tr key={index}>
                                <th className="align-middle">
                                    <p className="mb-0">{prestamo.ejemplar.id}</p>
                                </th>
                                <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500"}}>{this.calcularFecha(prestamo.fecha_prestamo)}</p>
                                </td>
                                <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500"}}>{this.calcularFecha(prestamo.fecha_devolucion)}</p>
                                </td>
                                <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.fecha_devol_real === null ? <h5><span style={{color: "black"}} className="badge bg-warning">Pendiente</span></h5>: this.calcularFecha(prestamo.fecha_devol_real)}</p>
                                </td>
                                <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.lugar}</p>
                                </td>
                                <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500"}}>{prestamo.usuario.rut}</p>
                                </td>
                                <td className="align-middle">
                                <Link to="/comprobante"><button type="button" className="btn btn-sm btn-secondary my-2 shadow">Ver comprobante</button></Link>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
                </div>
            </div>


            
    </div>
        )
    }
}

export default PrestamosCreados