import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export class MisSolicitudes extends Component {
    componentDidMount() {
        AOS.init();
    }

    
    render() {
    return (
        <div>
            <header>
                <div className="container py-5">
                    <div className="p-4 p-lg-5 rounded-3 text-center bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">Mis solicitudes</h1>
                        </div>
                    </div>
                </div>
            </header>

        <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col" className="h5">Libro</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Fecha de reserva</th>
                                    <th scope="col">Fecha de devolución</th>
                                    <th scope="col">Estado de la solicitud</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                    <div className="d-flex align-items-center">
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
                                    <td className="align-middle">
                                        <h5><span class="badge bg-success">Gestionada</span></h5>
                                    </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </div>
    )
  }
}

export default MisSolicitudes