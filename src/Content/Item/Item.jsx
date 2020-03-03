import React from 'react';
import css from './Item.module.css';

const Item = (props) => {
    return (
        <div className={`${props.position} ${css.item}`}>
            <div className={css.imageBlock}>
                <img src={props.imageLink} alt="" />
                {props.mark && <p className={css.mark}>{props.mark}</p>}
                <p className={css.name}>{props.name}</p>
                <p className={css.costs}>
                    <span className={css.cost}>{props.cost}</span>
                    {props.oldcost && <span className={css.oldcost}> {props.oldcost} </span>} 
                </p>
                <a className={css.addtocart} href="#">В корзину</a>
            </div>
        </div>
    );
}

export default Item;