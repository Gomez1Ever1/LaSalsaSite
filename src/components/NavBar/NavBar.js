import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import Routes from '../../Routes/Routes';
import './NavBar.css';


function NavBar() {
    return (
        <div className="py-3">
            <Navbar fixed="top" collapseOnSelect bg="danger" expand="md" className="mb-3" variant="light">
                <LinkContainer to='/'>
                    <Navbar.Brand className="font-weight-bold justify-content-center cenText">
                        Huatulco Tacos
              </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        <LinkContainer to="/AboutUs">
                            <Nav.Link>Our Story</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Nav.Link>Our Menu</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/LaSalsa">
                            <Nav.Link>Our Base Store</Nav.Link>
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