import React, { useState } from 'react';
// Using a function and props to change image and text on sidebar
export default function SidebarButton(props) {
const [isHovered, setIsHovered] = useState(false);

   
    return (
    <li onMouseEnter={() => setIsHovered(props.buttonText)}
        onMouseLeave={() => setIsHovered(false)}>
    <img src={isHovered === props.buttonText ? props.altImg :props.defaultImg} alt='test' />
    <p>{props.buttonText}</p>
    </li>
    )
    }
