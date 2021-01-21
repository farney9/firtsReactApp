import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
                <nav className="navbar navbar-dark sticky-top bg-dark navbar-expand-md">
                    <div className="container-fluid">
                        <Link 
                            to="/"
                            className="navbar-brand">Navbar
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink 
                                        to="/inicio"
                                        className="nav-link"
                                        activeClassName="active">Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/nosotros" 
                                        className="nav-link"
                                        activeClassName="active">Nosotros
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/contacto" 
                                        className="nav-link"
                                        activeClassName="active">Contacto
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/crudfirebase" 
                                        className="nav-link"
                                        activeClassName="active">CRUD Firebase
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/" 
                                        className="nav-link"
                                        activeClassName="active">Auth
                                    </NavLink>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li>
                                    <NavLink 
                                        to="/inicio">
                                        <button
                                            className="btn btn-outline-primary rounded-pill me-2" 
                                            type="button">Inicio
                                        </button>    
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink 
                                        to="/admin">
                                        <button
                                            className="btn btn-outline-primary rounded-pill" 
                                            type="button">Admin
                                        </button>    
                                    </NavLink>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default Navbar
