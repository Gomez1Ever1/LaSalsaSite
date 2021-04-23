import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import MeatCard from '../../components/Cards/MeatCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import MenuCard from '../../components/Cards/MenuCard';


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
                        <Col xs={6}>
                            <Nav.Item>
                                <Nav.Link eventKey="Menu"><h3>Menu</h3></Nav.Link>
                            </Nav.Item>
                        </ Col>
                        <Col xs={6}>
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
    }

};
export default Home;