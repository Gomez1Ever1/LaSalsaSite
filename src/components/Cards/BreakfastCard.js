import React from 'react';
import breakfast from '../../API/breakfast.js';
import { Container, Row, Col, Card, Jumbotron } from 'react-bootstrap';

export default function BreakfastCard(breakfast) {
    return (
        <div>
            <Container className="justify-content-lg-center">

                <Jumbotron style={{ marginBottom: 0 }} >
                    <h5>All items come with chips and salsa</h5>
                    <h5>Make any item a combo(sides of rice and beans) for $3!</h5>
                </Jumbotron>

                <Row className="justify-content-lg-center">{breakfast.props.map((item, i) =>

                    <Col lg={5} style={{ margin: '10px' }} key={i}>
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Card.Text><p>{item.value}</p>
                                </Card.Text>
                                <Card.Text><h3>{item.price}</h3></Card.Text>
                                <Card.Text><h4>{item.extra}</h4></Card.Text>

                            </Card.Body>
                        </ Card>
                    </Col>)}
                </Row>
            </Container>
        </div>
    );
};