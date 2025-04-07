import React, { useState } from 'react';

export default function SidebarButton(props) {
    const [isHovered, setIsHovered] = useState(false);

   //hover event to change images
    return (
    <li
    onMouseEnter={() => setIsHovered(props.buttonText)}
    onMouseLeave={() => setIsHovered(false)}>
    <img src={isHovered === props.buttonText ? props.altImg :props.defaultImg} alt='test' />
    <p>{props.buttonText}</p>
    </li>
    )
    }
