import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {

    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Elo Twitter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink exact className="nav-link" to="/">
                            Home
          </NavLink>
                        <NavLink exact className="nav-link" to="/configuracao">
                            Configuração
          </NavLink>
                    </Nav>
                    <Nav className="justify-content-end" activeKey="/home">
                        <NavLink exact className="nav-link" to="/login">
                            Entrar
          </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;