import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <>
                <div className="modal fade" role="dialog" tabindex="-1" id="modal-1" show={ this.props.show } onHide={ this.props.handleClose }>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Iniciar sesión</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card">
                                    <div className="card-body text-center d-flex flex-column align-items-center">
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><i class="bi bi-person"></i>
                                        </div>
                                        <form method="post">
                                            <div className="mb-3"><input class="form-control" type="email" name="email" placeholder="Correo"/></div>
                                            <div className="mb-3"><input class="form-control" type="password" name="password" placeholder="Contraseña"/></div>
                                            <div className="mb-3"><button class="btn btn-primary shadow d-block w-100" type="submit">Iniciar sesión</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Cerrar</button></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;