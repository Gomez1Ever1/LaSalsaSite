import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import MeatCard from '../../components/MeatCard/MeatCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import MenuCard from '../../components/MenuCard/MenuCard';


function Home() {
    return (
        <Tab.Container defaultActiveKey='Menu' >

            <Nav justify variant='tabs' className='flex-column' style={{ backgroundColor: 'white' }}>

                <Row>
                    <Col style={{ margin: '0' }}>
                        <Nav.Item>
                            <Nav.Link eventKey="Menu">Menu</Nav.Link>
                        </Nav.Item>
                    </ Col>
                    <Col style={{ margin: '0' }}>
                        <Nav.Item>
                            <Nav.Link eventKey="Meats">Meats</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>
            </Nav>
            <Row>

                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="Menu">
                            <MenuCard props={menuItems} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Meats">
                            <MeatCard props={meats} />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </ Tab.Container >
    );
};
export default Home;