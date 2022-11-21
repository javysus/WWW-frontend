import React from 'react';
import {useLazyQuery, gql} from '@apollo/client';

const VALIDACION_USUARIO = gql`query ValidacionUsuario($correo: String, $contrasenia: String) {
    ValidacionUsuario(correo: $correo, contrasenia: $contrasenia) {
      mensaje
      usuario
      bibliotecario
      validacion
    }
  }`;

var data_universal;
let enviado = false;

export default function Login(props){
    const [validarUsuario, { loading, error, data }] = useLazyQuery(VALIDACION_USUARIO);
    /*if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;*/
    
    if(data && !enviado){
        enviado = true;
        props.childToParent(data.ValidacionUsuario);
    }
    //console.log(data);
    return (
        <Login2 hookFunction={validarUsuario} data={data}></Login2>
    )
}

class Login2 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTrigger = this.onTrigger.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    };

    /*handleChange = (e) => {
        this.setState({
            email: e.target.email.value,
            password: e.target.password.value
        });
    }*/

    onTrigger = (e) => {
        //Validar_usuario({correo: e.target.email.value, constrasenia: e.target.password.value})
        
        //console.log(data);
        
        this.props.childToParent(e.target.email.value, e.target.password.value);

        e.preventDefault();
    };

    handleSubmit = (event) => {
        this.setState({
            email: event.target.email.value,
            password: event.target.password.value
        })

        event.preventDefault();
    }

    render() {
        const hookFunction = this.props.hookFunction;
        const data = this.props.data;

        return(
            <>
                <div className="modal fade" role="dialog" tabIndex="-1" id="modal-1">
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
                                        <form method="post" onChange={this.handleChange} onSubmit={(e) => {e.preventDefault(); hookFunction({variables: {correo: e.target.email.value, contrasenia: e.target.password.value}})}}>
                                            <div className="mb-3"><input class="form-control" type="email" name="email" placeholder="Correo"/></div>
                                            <div className="mb-3"><input class="form-control" type="password" name="password" placeholder="Contraseña"/></div>
                                            <div className="mb-3"><button class="btn btn-primary shadow d-block w-100" type="submit">Iniciar sesión</button></div>
                                        </form>

                                        {data ? (String(data.ValidacionUsuario.mensaje)):""}
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
//export default Login;