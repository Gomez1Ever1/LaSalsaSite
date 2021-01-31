import React from 'react';
import Card from 'react-bootstrap/Card';
function MenuCard(items) {
    const ListItems = (<ul>{items.props.map((item, i) =>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title><h2>{item.name}</h2></Card.Title>
                <Card.Text><h3>{item.value}</h3>
                </Card.Text>
                <h3>{item.price}</h3>
            </Card.Body>
        </ Card>)}

    </ul>
    );
    return (
        <div>
            {ListItems}
        </div>
    );
}
export default MenuCard;