import React from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import carrito from '../mocking/carrito'
import { Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import { useCookies } from "react-cookie";
import {useLazyQuery, useQuery, useMutation, gql} from '@apollo/client';
import { GET_USUARIO } from '../App';
import { GetUsuario } from '../App';

const GET_CARRITO = gql`query GetCarrito($usuario: String) {
  getCarrito(usuario: $usuario) {
    id
    solicitudes {
      libro {
        autor
        tipo
      }
      lugar
      fecha_reserva
      fecha_estimada
    }
  }
}`;
function LibroCarrito(props){
  var libro = props.libro;
  return (
  <tr key={props.index}>
  <th scope="row">
    <div className="d-flex align-items-center">
      <div className="flex-column ms-4">
        <p className="mb-2">{libro.titulo}</p>
        <p className="mb-0">{libro.autor}</p>
      </div>
    </div>
  </th>
  <td className="align-middle">
    <p className="mb-0" style={{fontWeight: "500;"}}>{libro.tipo}</p>
  </td>
  <td className="align-middle">
    <p className="mb-0" style={{fontWeight: "500;"}}>{libro.lugar}</p>
  </td>
  <td className="align-middle">
    <p className="mb-0" style={{fontWeight: "500;"}}>{libro.fecha_devolucion}</p>
  </td>
  <td className="align-middle">
      <button type="button" style={{background: "var(--bs-danger)"}} className="border-0 bs-icon-md bs-icon-circle shadow d-flex justify-content-center align-items-center me-2 bs-icon btn-block btn-md"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
      </button>
  </td>
</tr>)
}

function Carrito(){
  const [cookies, setCookie] = useCookies(["user"]);
  const [cookies_biblio, setCookieBiblio] = useCookies(["biblio"]);
  console.log(cookies.user);
  var {loading, error, data} = useQuery(GET_CARRITO, {
    variables: { usuario: cookies.user},
    });


  console.log(data);
  
  var {loading_user, error_user, data_user} = GetUsuario();

  return <CarritoComponent data={data} data_user={data_user}></CarritoComponent>

}
class CarritoComponent extends React.Component{
  componentDidMount() {
    AOS.init();
  }
  state = { expanded: false }
    constructor(props) {
      super(props);
  
      this.state = {
        collapseMenu: true,
        open: false,
        startDate: new Date(),
        today: new Date(),
      };
  
      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState({ open: false });

    handleClick = () => this.setState({ open: true });

    render(){
        const { open } = this.state;
        var carrito = this.props.data;
        return(
            <>
              <div>
                    <div className="container py-0">
                        <div className="p-2 p-lg-3 rounded-3 bg-primary-gradient shadow-sm" data-aos="fade-up" data-aos-duration="1000">
                          <div className="text-left">
                            <Link to="/"><button type="button" className="btn btn-sm btn-primary px-3 mb-3 shadow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>Volver</button></Link>
                          </div>
                            <div className="m-4 m-lg-5 text-center">
                                <h1 className="display-5 fw-bold">Carrito de libros</h1>
                            </div>
                            <hr></hr>
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
                            {carrito.data.getCarrito.map((libro, index) =>
                              <LibroCarrito index={index} libro={libro}></LibroCarrito>
                              )
                            }
                          </tbody>
                        </table>
                      </div>

                      <div className="card-body p-4">
                          <div className="row justify-content-end">
                              <div className="col-lg-4 col-xl-2">
                              <button onClick ={this.handleClick} type="button" className="btn btn-primary btn-block btn-md shadow">
                                  <div className="d-flex justify-content-between">
                                  <span>Confirmar</span>
                                  </div>
                              </button>
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
                                      Sus solicitudes han sido confirmadas
                                  </MuiAlert>
                              </Snackbar>
                              </div>
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
                        </div>
                    </div>
                </div>

                <section className="h-100 h-custom">
              </section>
            </>
        )
    }
}

export default Carrito