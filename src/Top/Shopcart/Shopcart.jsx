import React from 'react';
import css from './Shopcart.module.css';

const Shopcart = () => {
    return (
        <span className={css.cart}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className={css.count}> ( <span className="countNumber">0</span> )</span>
        </span>
    );
}

export default Shopcart;