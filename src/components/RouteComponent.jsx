import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Civilizacion from './Civilizacion';
import Contacto from './Contacto';
import CrudFirebase from './CrudFirebase';
import Inicio from './Inicio';
import Nosotros from './Nosotros';

const RouteComponent = () => {
    return (
        <>
            <Router>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
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
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container my-5">
                    <Switch>
                        <Route path="/nosotros" exact><Nosotros/></Route>
                        <Route path="/nosotros/:id"><Civilizacion/></Route>
                        <Route path="/inicio"><Inicio/></Route>
                        <Route path="/contacto"><Contacto/></Route>
                        <Route path="/crudfirebase"><CrudFirebase/></Route>
                        <Route path="/" exact><Inicio/></Route>
                    </Switch>
                </div>

            </Router>

        </>
    )
}

export default RouteComponent
