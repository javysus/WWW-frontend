import React from 'react';

class Carrito extends React.Component{
    render(){
        return(
            <>
                <section className="h-100 h-custom">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="h5">Libros a solicitar</th>
                <th scope="col">Tipo</th>
                <th scope="col">Lugar</th>
                <th scope="col">Fecha devolución</th>
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
                    <button type="button" style={{background: "var(--bs-danger)"}} className="border-0 bs-icon-md bs-icon-circle shadow d-flex justify-content-center align-items-center me-2 bs-icon btn-block btn-md"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-bottom-0">
                  <div className="d-flex align-items-center">
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
                    <button type="button" style={{background: "var(--bs-danger)"}} className="border-0 bs-icon-md bs-icon-circle shadow d-flex justify-content-center align-items-center me-2 bs-icon btn-block btn-md"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
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

export default Carrito