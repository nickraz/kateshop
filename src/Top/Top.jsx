import React from 'react';
import Search from './Search/Search.jsx';
import Shopcart from './Shopcart/Shopcart.jsx';
import css from './Top.module.css';

const top = () => {
    return (
        <div className={css.top}>
            <nav className={`'navbar navbar-default navbar-fixed-top' ${css.top}`}>
                <div className="container text-left">
                    <Search />
                    <Shopcart />
                </div>
            </nav>
        </div>
    );
}

export default top;