import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import lonchera from '../../images/lonchera.jpg';
import Accion1 from '../../images/Accion1.jpg'
import Accion3 from '../../images/Accion3.jpg';
import Accion4 from '../../images/Accion4.jpeg';
import weCater from '../../images/weCater.png';

export default function Huatulco() {
    return (
        <Container>

            <Jumbotron>
                <Row className='justify-content-center'>
                    <Image src={weCater} alt='catering' fluid />
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} lg={5}>
                        <Image src={Accion4} alt='people4' fluid rounded />
                    </Col>
                    <Col xs={12} lg={5}>
                        <h4>Serving the Central Coast for all of your catering needs! We feature a fully staffed truck with all of our menu items, plus a little more!</h4>
                    </Col>
                </Row>
            </Jumbotron>
            <Col xs lg>
                <Image src={lonchera} alt='Truck' fluid />
            </Col>
            <Jumbotron>
                <Row className='justify-content-center'>
                    <Col xs={12} lg={5}>
                        <h4>Serving the Central Coast for all of your catering needs! We feature a fully staffed truck with all of our menu items, plus a little more!</h4>
                    </Col>
                    <Col xs={12} lg={5}>
                        <Image src={Accion3} alt='people3' fluid rounded />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} lg={5}>
                        <Image src={Accion1} alt='people1' fluid rounded />
                    </Col>
                    <Col xs={12} lg={5}>
                        <h1>Now stopping at:</h1>
                        <li>
                            Corner of South Riverside, on the way to Barney Schwartz Park.
                    </li>
                    </Col>
                </Row>
            </Jumbotron>
        </Container >

    )
};