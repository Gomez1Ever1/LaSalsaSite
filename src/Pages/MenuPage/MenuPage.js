import React from 'react';
import MeatCard from '../../components/MeatCard/MeatCard';
import meats from '../../API/meats';
import menuItems from '../../API/menuItems';
import MenuCard from '../../components/MenuCard/MenuCard';


function MenuPage() {
    return (
        <div>
            <MeatCard props={meats} />
            <MenuCard props={menuItems} />
        </div>
    )
}
export default MenuPage;