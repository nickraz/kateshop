import React from 'react';
import css from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={`row ${props.position} ${css.menu}`} data-container="container">
            <div className={props.childPosition}>
                <a href="#"><i className="fa fa-home" aria-hidden="true"></i>Главная</a>
            </div>
            <div className={props.childPosition}>
                <a href="#"><i className="fa fa-car" aria-hidden="true"></i>Доставка</a>
            </div>
            <div className={props.childPosition}>
                <a href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Оформить заказ</a>
            </div>
        </div>
    );
}

export default Menu;