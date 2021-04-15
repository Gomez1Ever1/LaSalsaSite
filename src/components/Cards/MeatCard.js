import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ItemCard(meats) {
    return (
        <div>
            <Container fluid>
                {meats.props.map((item, i) =>
                    <Row>
                        <Col style={{ margin: '10px' }}>
                            <Card lg>
                                <li key={i}><h3>{item.name}</h3>
                                    <h4>{item.value}</h4>
                                </li>
                            </Card>

                        </Col>
                    </Row>)}

            </Container>
        </div>
    );
};
