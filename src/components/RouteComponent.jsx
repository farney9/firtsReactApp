import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Civilizacion from './Civilizacion';
import Contacto from './Contacto';
import CrudFirebase from './CrudFirebase';
import Inicio from './Inicio';
import Login from './Login';
import Admin from './Admin';
import Nosotros from './Nosotros';
import Navbar from './Navbar';

const RouteComponent = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <div className="container my-5">
                    <Switch>
                        <Route path="/" exact><Inicio/></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/admin"><Admin/></Route>
                        <Route path="/nosotros" exact><Nosotros/></Route>
                        <Route path="/nosotros/:id"><Civilizacion/></Route>
                        <Route path="/inicio"><Inicio/></Route>
                        <Route path="/contacto"><Contacto/></Route>
                        <Route path="/crudfirebase"><CrudFirebase/></Route>
                    </Switch>
                </div>

            </Router>

        </>
    )
}

export default RouteComponent
