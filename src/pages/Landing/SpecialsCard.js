import React from 'react';
import "../../styles/SpecialsCard.css";

import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = (props) => {
    const { image, title, price, description, order, index } = props;

    return (
        <div key={index} className="special-card-container">
            <div className="image-container">
                <img src={image} alt="Special dessert"/>
            </div>
            <div className="special-card-text">
                <div className="special-card-title">
                    <h3>{title}</h3>
                    <h3 className="price-tag">{price}</h3>
                </div>
                <p className='special-card-description'>{description}</p>
                <NavLink to="#">
                    <h4>
                        {order}
                        <MdDeliveryDining size={30} style={{color: "#333", marginLeft: "5px",}}/>
                    </h4>
                </NavLink>
            </div>
        </div>
    )
}

export default SpecialsCard