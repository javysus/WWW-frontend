import React, { Component } from 'react'

class SolicitudesGestionadas extends React.Component{
    render() {
        return(
            <>
                <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <h6 style={{paddingBottom: "11px", paddingLeft:"20px"}}>Marque los libros que desea gestionar</h6>
                    <div className="col">

                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="h5">Libro</th>
                              <th scope="col">Tipo</th>
                              <th scope="col">Lugar</th>
                              <th scope="col">Fecha reserva</th>
                              <th scope="col">Ejemplar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <div className="flex-column ms-4">
                                    <p className="mb-2">El libro troll</p>
                                    <p className="mb-0">El Rubius</p>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Libro</p>
                              </td>
                              <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Domicilio</p>
                              </td>
                              <td className="align-middle">
                                <p className="mb-0" style={{fontWeight: "500;"}}>16/01/2015</p>
                              </td>
                              <td className="align-middle">
                                <div className="col-sm-9">
                                    <p className="mb-0" style={{fontWeight: "500;"}}>NoSe,LaIdDelLibroTroll(?)</p>
                                </div>
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
                                    <p className="mb-2">Muerto de risa</p>
                                    <p className="mb-0">Pedro Ruminot</p>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>Libro</p>
                              </td>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>En Sala</p>
                              </td>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>13/09/2022</p>
                              </td>
                              <td className="align-middle border-bottom-0">
                                <p className="mb-0" style={{fontWeight: "500;"}}>QueBuenLibro,NoEnRealidadNo,PeroFueEntrete</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="card-body p-4">
                          <div className="row justify-content-end">
                              <div className="col-lg-4 col-xl-2">
                              <button type="button" className="btn btn-primary btn-block btn-md">
                                  <div className="d-flex justify-content-between">
                                  <span>Volver</span>
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

export default SolicitudesGestionadas