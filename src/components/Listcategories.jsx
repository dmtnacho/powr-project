import React from 'react';
import { Categories } from './Categories';

export const Listcategories = () => {
    return (
        <nav className="navbar">
          <ul className='navbar__botones'>
            <Categories href='index.html' texto='NEW ARRIVALS' />
            <Categories href='index.html' texto='ACCESORIES' />
            <Categories href='index.html' texto='SKATEBOARDING' />
            <Categories href='index.html' texto='ABOUT US' />
          </ul>
        </nav>
    )
}

export default Listcategories