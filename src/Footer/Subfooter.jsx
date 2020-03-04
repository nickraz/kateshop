import React from 'react';
import css from './Subfooter.module.css';

const Subfooter = () => {
    return (
        <div className="container">
            <hr/>
            <p>M&amp;M Flowers - Доставка цветов Махачкала, {new Date().getFullYear()} г.</p>
        </div>
    );
}

export default Subfooter;