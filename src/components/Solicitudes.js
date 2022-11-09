import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Solicitudes extends React.Component{
    componentDidMount() {
        AOS.init();
    }
    render() {
        return(
            <>
                <header>
                    <div className="container py-5">
                        <div className="p-4 p-lg-5 rounded-3 text-center bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                            <div className="m-4 m-lg-5">
                                <h1 className="display-5 fw-bold">Solicitudes</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                  <div className="row d-flex justify-content-left align-items-center h-100">
                    <div className="col">
                        <div className="d-flex justify-content-left align-items-center">
                            <span className="bs-icon-sm bs-icon-circle bs-icon-primary text-bg-warning shadow d-flex justify-content-center align-items-center me-2 bs-icon" style={{width: '30px', height: '30px'}}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                                </svg>
                            </span><h6 style={{paddingTop: "8px"}}>Seleccione las solicitudes que quiere gestionar</h6>
                        </div>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col" className="h5">Libro</th>
                              <th scope="col">Tipo</th>
                              <th scope="col">Lugar</th>
                              <th scope="col">Fecha reserva</th>
                              <th scope="col">Ejemplar</th>
                              <th scope="col">Ubicacion</th>
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
                                <p className="mb-0" style={{fontWeight: "500;"}}>30/11/2022</p>
                              </td>
                              <td className="align-middle">
                                <div className="col-sm-9">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Seleccione un ejemplar</option>
                                        <option value="ejemplar1">As39uwu909uwuwuwuteamu</option>
                                        <option value="ejemplar2">NosexdUnaIDRaraSupongo</option>
                                        <option value="ejemplar3">BubuCasateConmigo?DeVerdadQueQuiero:c</option>
                                    </select>
                                </div>
                              </td>
                              <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Algo para cambiar automaticamente el ñe jsjsjsjs</p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="border-bottom-0">
                                <div className="d-flex align-items-center">
                                    <td className="align-middle">
                                        <div class="form-check-md">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </td>
                                  <div className="flex-column ms-4">
                                    <p className="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                                    <p className="mb-0">Yuval Noah Harari</p>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Libro</p>
                              </td>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Domicilio</p>
                              </td>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>13/11/2022</p>
                              </td>
                              <td className="align-middle border-bottom-0">
                                <div className="col-sm-9">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Seleccione un ejemplar</option>
                                        <option value="ejemplar1">A1B2C3D4E5F6</option>
                                        <option value="ejemplar2">MiBubiEsLaMasLindaHermosaPreciosa</option>
                                        <option value="ejemplar3">AmoAMiBubuAaaaaaaaahuwu</option>
                                    </select>
                                </div>
                              </td>
                              <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Algo para cambiar automaticamente el ñe x2</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="card-body p-4">
                          <div className="row justify-content-end">
                              <div className="col-lg-4 col-xl-2">
                              <button type="button" className="btn btn-primary btn-block btn-md shadow">
                                  <div className="d-flex justify-content-between">
                                  <span>Confirmar</span>
                                  </div>
                              </button>
                              </div>
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </>
        )
    }
}

export default Solicitudes