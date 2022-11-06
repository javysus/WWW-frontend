import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
                <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" style={{width: '50px', height: '50px'}}>
                    </span><span>BEC</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link active" href="index-app.html">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link active" href="index-app.html">Catálogo</a></li>
                            <li className="nav-item"><a className="nav-link active" href="como-solicitar.html">¿Cómo solicitar?</a></li>
                        </ul><a className="btn btn-primary shadow" role="button" href="#modal-1" data-bs-target="#modal-1" data-bs-toggle="modal">Iniciar sesión</a>
                        <ul className="navbar-nav">
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;