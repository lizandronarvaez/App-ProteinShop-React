import React, { useEffect, useState } from 'react';
import Menu from "../../../../public/svg/menu.svg"

export const HamburgerMenu = ({toggleClass}) => {
    return (
        <div className='hover:cursor-pointer md:hidden'>
            <img src={Menu} alt={Menu} onClick={toggleClass} />
        </div>
    )
}
