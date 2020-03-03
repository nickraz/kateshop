import React from 'react';
import css from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={props.position}>
           <a href="#" className={css.href}><img src="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_home-logo1.png" alt="logo" className={css.picture}/></a> <span className={css.txt}>Flower shop</span>
        </div>  
    );
}

export default Logo;