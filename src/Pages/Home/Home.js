import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import weCater from '../../images/weCater.png';

function Home() {
    return (
        <Container >
            <Jumbotron>
                <div className="justify-content-center" >
                    <h1>La Salsa Market</h1>
                    <h2>Una Verdadera Fiesta de Sabor!</h2>
                    <Image src={weCater} alt='weCater' fluid />
                </div>
            </Jumbotron>

            <Jumbotron style={{ opacity: '0.8' }}>
                <h3>Located on the corner of 3rd street in Shandon, California!</h3>
            </Jumbotron>
            <Jumbotron style={{ opacity: '0.8' }}>
                <div className="justify-content-center">
                    <h1>Open Monday through Friday</h1>
                    <h2>9am to 9pm</h2>
                </div>
            </Jumbotron>
        </Container>
    );
};
export default Home;