import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

export default function Footer() {

    return (
        <div>
            <Navbar color="white" bg='dark'>
                <Container className="justify-content-center">
                    <Navbar.Brand>
                        <div>
                            <h3>Call Us Today!</h3>
                            <h3>(805) 239-8930</h3>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}