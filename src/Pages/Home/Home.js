import React from 'react';
import { Tab, Row, Col, Nav, Button, Alert } from 'react-bootstrap';
import MeatDrinkCard from '../../components/Cards/MeatDrinkCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import drinks from '../../API/drinks';
import MenuCard from '../../components/Cards/MenuCard';


class Home extends React.Component {

    render() {
        return (
            <Tab.Container defaultActiveKey='Menu' className=' justify-content-center'>
                <Nav fill variant='tabs' className='flex-column' className=' justify-content-center' style={{ backgroundColor: 'white', marginTop: '50px' }}>

                    <Nav.Item>
                        <Nav.Link eventKey="Menu"><p>Menu</p></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="Drinks"><p>Drinks</p></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="Meats"><p>Meats</p></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Row className=' justify-content-center'>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="Menu">
                                <MenuCard props={menuItems} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Drinks">
                                <MeatDrinkCard props={drinks} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Meats">
                                <MeatDrinkCard props={meats} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </ Tab.Container >

        );
    }

};
export default Home;