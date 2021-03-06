import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

import weCater from '../../images/weCater.png';

function Huatulco() {
    return (
        <Container className="justify-content-lg-center">
            <Jumbotron lg={12} xs={12} >
                <div className="justify-content-center" >
                    <h1>La Salsa Market</h1>
                    <h2>Una Verdadera Fiesta de Sabor!</h2>
                    <Image src={weCater} alt='weCater' fluid />
                </div>
            </Jumbotron>

            <Jumbotron lg={12} xs={12} style={{ opacity: '0.8' }}>
                <div className="justify-content-center">
                    <h3>Located on the corner of 3rd street in Shandon, California!</h3>
                    <h1>Open 7 days a week!</h1>
                    <h2>9am to 9pm</h2>
                </div>
            </Jumbotron>

        </Container >

    )
};
export default Huatulco;