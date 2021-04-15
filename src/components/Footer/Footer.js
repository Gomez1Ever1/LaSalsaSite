import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

export default function Footer() {

    return (
        <div>
            <Navbar bg='dark' sticky="bottom" variant='dark' >
                <Container className="justify-content-center">
                    <Navbar.Brand>
                        <div>
                            <h3>Call Us Today!</h3>
                            <h3>(805) 975-8021</h3>
                            <p>	&#169; La Salsa Market LLC. We do not save, use, or sell any information. All rights reserved</p>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}