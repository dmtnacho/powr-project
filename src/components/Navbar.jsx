import React from 'react';
import alterno_logo from '../img/alterno_logo.png';
import { Listcategories } from './Listcategories';
import { Cart } from './Cart';

export const Navbar = () => {
  return (
    <header>
      <h1 className='header__logo'>
        <a href="index.html">
          <img src={alterno_logo} alt="Alterno Brand Logo" className="logo__imagen" width={250} height={30} />
        </a>
      </h1>

      <div className='header__cateYcarro'>
        <Listcategories />
        <Cart />
      </div>
    </header>
  );
};

export default Navbar