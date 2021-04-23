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
                                <div key={i}>
                                    <h3>{item.name}</h3>
                                    <h4>{item.value}</h4>
                                </div>
                            </Card>

                        </Col>
                    </Row>)}

            </Container>
        </div>
    );
};
