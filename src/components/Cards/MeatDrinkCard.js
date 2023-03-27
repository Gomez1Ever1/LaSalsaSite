import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ItemCard(meats) {
    //loops through parameters, defined as meats, and returns name, description, prices, and mods
    return (
        <div>
            <Container fluid className="justify-content-lg-center">
            <Row className="flex-column, justify-content-lg-center">{meats.props.map((item, i) =>

                    <Col lg={12} xs={12} style={{ margin: '10px' }} key={i}>
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Card.Text><p>{item.value}</p></Card.Text>
                                <Card.Text><h3>{item.price}</h3></Card.Text>
                                <Card.Text><h4>{item.extra}</h4></Card.Text>

                            </Card.Body>
                        </ Card>
                    </Col>
                )}
                </Row>
            </Container >
        </div >
    );
};
