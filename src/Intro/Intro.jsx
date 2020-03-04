import React from 'react';
import Button from './Button.jsx'
import css from './Intro.module.css';

const Intro = () => {
    return (
        <div class={`container ${css.intro}`} data-container="container">
            <div className="col-sm-6">
                <h1 className={css.bigwhite}>Магазин цветов Махачкала</h1>
                <p className={css.subtitle}>Доставка цветов и букетов</p>
                <h2 className={css.smallwhite}>
                    Цветочный интернет-магазин на Первомайской, 172. Доставка цветов в Пятигорске, Ессентуках, Железноводске, по КавМинВодам.
                </h2>
                <br />
                <Button />
            </div>
        </div>
    );
}

export default Intro;