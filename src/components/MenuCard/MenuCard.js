import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export default function MenuCard(items) {
    return (
        <div>
            <Container>
                <Row className="justify-content-lg-center">{items.props.map((item, i) =>
                    <Col lg={5} style={{ margin: '10px' }}>
                        <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Card.Text><h5>{item.value}</h5>
                                </Card.Text>
                                <h3>{item.price}</h3>
                            </Card.Body>
                        </ Card>
                    </Col>)}
                </Row>
            </Container>
        </div>
    );
}