import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import './Navs.css';

export default function Footer() {

    return (
        <div>
            <Navbar bg='dark' sticky="bottom" variant='dark' >
                <Container className="justify-content-center">
                    <Navbar.Brand>
                        <div style={{ margin: 0, padding: 0 }}>
                            <h3>Call Us Today!</h3>
                            <h3>(805) 975-8021</h3>
                            <p style={{ fontSize: 10 }}>&#169;La Salsa Market. All rights reserved.</p>
                            <p style={{ fontSize: 10 }}>We do not save, use, or sell any information.</p>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}