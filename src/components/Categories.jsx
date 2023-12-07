import React from 'react';

export const Categories = ({ href, texto }) => {
    return (
        <li className="categorias">
            <a href={href} className='categorias__botones'>{texto}</a>
        </li>
    );
}

export default Categories