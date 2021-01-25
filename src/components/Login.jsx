import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const procesarDatos = e => {
        e.preventDefault()

        if (!email.trim()) {
            console.log('Ingrese email');
            return
        }

        if (!password.trim()) {
            console.log('Ingrese password');
            return
        }
    }


    return (
        <div className="mt-5">
            <h4>Registro de usuarios</h4>
            <hr/>
            <div className="row justify-content-center"></div>
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                <form onSubmit={procesarDatos}>
                    <input
                        type="email" 
                        className="form-control mb-2"
                        placeholder="Ingrese email.."
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password" 
                        className="form-control mb-2"
                        placeholder="Ingrese password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="d-grid">
                        <button className="btn btn-dark mb-2">
                        Registrarse
                        </button>
                        <span className="text-center">ó</span>
                        <button className="btn btn-info mb-2">
                        Iniciar sesión
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
