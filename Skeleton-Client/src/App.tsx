
import React, {useState} from 'react';
import './index.css'
import './App.css'
import {Blue6} from "./Components/Blue6";
import {Blue7} from "./Components/Blue7";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import {Homepage} from "./Components/Homepage";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";




export const App = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
            <Router>

                        <Navbar className="unclass-banner py-0">
                        <Navbar className="mx-auto unclass-banner" >Unclassified</Navbar>
                    </Navbar>
                        <Navbar color="faded" light className="navbar-banner">
                            <NavbarBrand href="/" className="me-auto">Lancer Brigade Operations Center</NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} className="me-2" />
                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Link to="/submit-blue6">Initiate Training Event with Blue 6</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/submit-blue7">Closeout Training Event with Blue 7</Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/submit-blue6">
                            <Blue6 />
                        </Route>
                        <Route exact path="/submit-blue7">
                            <Blue7 />
                        </Route>
                    </Switch>

            </Router>


    )
}
