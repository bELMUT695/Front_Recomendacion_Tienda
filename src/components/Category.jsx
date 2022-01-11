import React from 'react';
import './styles/Category.scss';
const Category =()=>{

return (
    <div className="mobile-menu">
        <ul>
            <li>
                

                <a href="/">CATEGORIES</a>
            </li>
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Polos</a>
            </li>
            <li>
                <a href="/">Blusas</a>
            </li>
            <li>
                <a href="/">Shorts</a>
            </li>
            <li>
                <a href="/">Pantalones</a>
            </li>
            <li>
                <a href="/">Other</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/" className="email">
                    platzi@example.com
        </a>
            </li>
            <li>
                <a href="/" className="sign-out">
                    Sign out
        </a>
            </li>
        </ul>
    </div>
);

}


export default Category;