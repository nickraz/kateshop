import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`container ${css.footer}`} data-container="container">
            <div className="col-sm-3">
                <h4>Категории</h4>
                <p><a href="#">Розы</a></p>
                <p><a href="#">Тюльпаны</a></p>
                <p><a href="#">Лилии</a></p>
                <p><a href="#">Герберы</a></p>
            </div>
            <div className="col-sm-3">
                <h4>Информация</h4>
                <p><a href="#">Пользовательское соглашение</a></p>
                <p>Наши посетители</p>
            </div>
            <div className="col-sm-3">
                <h4>Контакты</h4>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i> ул.Магомедтагирова, дом 156 Махачкала, Республика Дагестан, Россия, 367009</p>
                <p className={css.phone}><a href="tel:+79382000277"><i className="fa fa-phone" aria-hidden="true"></i> 8 (938) 200-02-77</a></p>
            </div>
            <div className="col-sm-3">
                <h4>Социальные сети</h4>
                <p><a href="https://www.instagram.com/m.m_flowers_05/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i> m.m_flowers_05</a></p>
                <p><a href="https://www.facebook.com/m.m.flowers05/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i> m.m_flowers_05</a></p>
            </div>
        </div>
    );
}

export default Footer;