import React from 'react';
import carritoLogo from '../img/cart.png';

export const Cart = () => {
    return (
        <div className='carrito'>
            <img src={carritoLogo} alt="Carrito" width={30} className='carrito__logo'/>
            <p className='carrito__cantidadProds'>0</p>
        </div>
    )
}

export default Cart