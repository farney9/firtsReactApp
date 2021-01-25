import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="mt-5">
            <h4>Login or Register</h4>
            <hr/>
            <div className="row justify-content-center"></div>
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                <form>
                    <input
                        type="email" 
                        className="form-control"
                        placeholder="Ingrese email.."
                    />
                    <input
                        type="password" 
                        className="form-control"
                        placeholder="Ingrese password"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login
