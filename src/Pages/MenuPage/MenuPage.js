import React from 'react';
import MeatCard from '../../components/MeatCard/MeatCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import MenuCard from '../../components/MenuCard/MenuCard';
import { Container, Row, Col } from 'react-bootstrap';
import './MenuPage.css';


function MenuPage() {
    return (
        <Container>
            <Row>
                <MeatCard props={meats} />
            </Row>
            <Row>
                <MenuCard props={menuItems} />
            </Row>


        </Container>
    )
}
export default MenuPage;