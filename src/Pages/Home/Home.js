import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import MeatDrinkCard from '../../components/Cards/MeatDrinkCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import drinks from '../../API/drinks';
import MenuBreakfastCard from '../../components/Cards/MenuBreakfastCard';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: new Date().getDay()
        };
    };
    render() {
        console.log(this.state.day);
        return (
            <Tab.Container defaultActiveKey='Menu'>
                <Nav justify variant='tabs' className='flex-column' style={{ backgroundColor: 'white', marginTop: '50px' }}>
                    <Row>
                        <Col xs={4}>
                            <Nav.Item>
                                <Nav.Link eventKey="Menu"><h3>Menu</h3></Nav.Link>
                            </Nav.Item>
                        </ Col>
                        <Col xs={4}>
                            <Nav.Item>
                                <Nav.Link eventKey="Drinks"><h3>Drinks</h3></Nav.Link>
                            </Nav.Item>
                        </ Col>
                        <Col xs={4}>
                            <Nav.Item>
                                <Nav.Link eventKey="Meats"><h3>Meats</h3></Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Nav>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="Menu">
                                <MenuBreakfastCard props={menuItems} />
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