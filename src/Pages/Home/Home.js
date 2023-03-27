import React from 'react';
import { Tab, Row, Col, Nav, Button, Alert } from 'react-bootstrap';
import MeatDrinkCard from '../../components/Cards/MeatDrinkCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import drinks from '../../API/drinks';
import MenuCard from '../../components/Cards/MenuCard';


class Home extends React.Component {
//Renders a nabar with the menu options as well as descriptors and prices
//**currently experiencing issues with the drink card, possibly related to size of API? lack of descriptor(bulk text) */
//issue manifests itself in the form of a card that does not follow the standard sizes, rather shrinks down menu as well as component itself
    render() {
        return (
            <Tab.Container defaultActiveKey='Drinks' className='flex-column, justify-content-lg-center'>
                <Nav fill variant='tabs' className='flex-column, justify-content-lg-center' style={{ backgroundColor: 'white', marginTop: '50px' }}>

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
                <Row className='flex-column, justify-content-lg-center'>
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