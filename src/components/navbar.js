import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import Login from "./Login"

const NavBar = () => {

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
                            <li className="nav-item"><a className="nav-link active" href="index-app.html">Catálogo</a></li>
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
export default NavBar;