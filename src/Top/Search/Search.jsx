import React from 'react';
import css from './Search.module.css';

const search = () => {
    return (
        <span className={css.search}>
            <input type="text" placeholder="Поиск по сайту" />
        </span>
    );
}

export default search;