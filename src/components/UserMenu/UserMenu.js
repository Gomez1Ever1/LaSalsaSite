import React from 'react';
import { Link } from 'react-router-dom';

function UserMenu() {
    return (
        <div><Link to='/AboutUs' >
            <h3> About Us</h3>
        </Link>
            <Link to='/MenuPage'>
                <h3> Our Menu </h3>
            </Link>
        </div>
    )
}
;
export default UserMenu;