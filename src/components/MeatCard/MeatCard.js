import React from 'react';

function ItemCard(meats) {
    const ListItems = (<ul>{meats.props.map((item, i) =>
        item.price ? <li key={i}>

            <h3>{item.name}</h3>
            <h4>{item.value}</h4>
            <h4>{item.price}</h4>
            <img src={item.image} alt={item.name}></img>
        </li> :
            <li key={i}><h3>{item.name}</h3>
                <h4>{item.value}</h4>
            </li>)}

    </ul>
    );
    return (
        <div>
            {ListItems}
        </div>
    );
};
export default ItemCard;