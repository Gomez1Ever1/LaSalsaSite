import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Routes from '../Routes/Routes';


function NavBar() {
    return (
        <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to='/'>
                    <Navbar.Brand className="font-weight-bold text-muted">
                        La Salsa Market
              </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        <LinkContainer to="/AboutUs">
                            <Nav.Link>Our Story</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Menu">
                            <Nav.Link>Our Menu</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes />
        </div>
    )
}
;
export default NavBar;