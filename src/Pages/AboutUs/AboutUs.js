import React from 'react';
import Image from 'react-bootstrap/Image';
import Accion2 from '../../images/Accion2.jpg';
import Lonchera2 from '../../images/Lonchera2.jpeg';

function AboutUs() {
    return (
        <div className='justify-content-center' style={{ backgroundImage: `url(${Accion2})`, backgroundSize: 'cover', height: 'auto', width: 'auto' }}>
            <div>
                <h1>
                    Humble Beginnings
                </h1>

                <p>"A taste of Oaxacan authenticity, right here on the Central Coast! We are committed to
                providing the most quality products in our location, while staying true to the traditions and customs we have made claim to.
               100% family run!"</p>

            </div>
        </div>
    )
};
export default AboutUs;