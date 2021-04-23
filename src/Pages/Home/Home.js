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
            saturday: this.isSaturday()
        };
    };
    isSaturday() {
        var day = new Date().getDay();
        if (day === 6) {
            return true;
        }
        else {
            return false;
        }
    };
    render() {
        console.log(this.state.saturday);
        const Saturday = this.state.saturday;
        return (
            <Tab.Container defaultActiveKey='Menu'>
                <Nav justify variant='tabs' className='flex-column justify-content-center' style={{ backgroundColor: 'white', marginTop: '50px' }}>
                    <Row>
                        <Col xs={4}>
                            <Nav.Item>
                                <Nav.Link eventKey="Menu"><p>Menu</p></Nav.Link>
                            </Nav.Item>
                        </ Col>
                        <Col xs={4}>
                            <Nav.Item>
                                <Nav.Link eventKey="Drinks"><p>Drinks</p></Nav.Link>
                            </Nav.Item>
                        </ Col>

                        <Col xs={4}>
                            <Nav.Item>
                                <Nav.Link eventKey="Meats"><p>Meats</p></Nav.Link>
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