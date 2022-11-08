import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import Login from "./Login"

const NavBar = () => {
    var log = 1

    if (log == 0){
        return(
            <>
                <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
                    <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" style={{width: '50px', height: '50px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" fill="currentColor" style={{width: '20px', height: '20px'}}>
                            <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"></path>
                        </svg>
                        </span><span>BEC</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item"><Link className="nav-link active" to="/">Inicio</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/catalogo">Catálogo</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/como-solicitar">¿Cómo solicitar?</Link></li>
                            </ul><a className="btn btn-primary shadow" role="button" href="#modal-1" data-bs-target="#modal-1" data-bs-toggle="modal">Iniciar sesión</a>
                            <ul className="navbar-nav">
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                        </ul>
                        </div>
                    </div>
                </nav>            
                <Login />
            </>
        );
    }
    else if (log == 1){
        return(
            <>
                <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
                    <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" style={{width: '50px', height: '50px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" fill="currentColor" style={{width: '20px', height: '20px'}}>
                            <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"></path>
                        </svg>
                        </span><span>BEC</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item"><Link className="nav-link active" to="/">Inicio</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/catalogo">Catálogo</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/como-solicitar">¿Cómo solicitar?</Link></li>
                            </ul>
                            <div style={{paddingRight: "15px"}}>
                                <Link to="/carrito">
                                    <button type="button" style={{backgroundColor: "white"}} className="border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            <div style={{paddingRight: "15px"}}>
                                <button type="button" style={{backgroundColor: "white"}} className="border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="bs-icon-lg bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg class="bi bi-person" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                        </ul>
                        </div>
                    </div>
                </nav>            
                <Login />
            </>
        );
    }
    
}
export default NavBar;