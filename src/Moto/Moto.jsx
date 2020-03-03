import React from 'react';
import css from './Moto.module.css';
import Logo from './Logo/Logo.jsx';
import Menu from './Logo/Menu';

const Moto = () => {
    return (
        <div class={`container ${css.moto}`}>
            <div className="row">
                <Logo position="col-sm-4" />
                <Menu position="col-sm-8" childPosition="col-sm-3" />
            </div>
        </div>
    );
}

export default Moto;