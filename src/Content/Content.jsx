import React from 'react';
import css from './Content.module.css';
import Item from './Item/Item';

const Content = (props) => {
    return (
        <div className={css.content}>
            <h3>{props.header}</h3>
            <div class="container" data-container="container">
                <Item position="col-sm-3" cost="2500" oldcost="2700" mark="New" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-16.jpg" name="Название букета"/>
                <Item position="col-sm-3" cost="2800" oldcost="3500" mark="Sale" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-13.jpg" name="Букет с герберой"/>
                <Item position="col-sm-3" cost="3500" mark="New" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-4-0.jpg" name="Букет с лилией"/>
                <Item position="col-sm-3" cost="5000" oldcost="7350" mark="Viola" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-7.jpg" name="Фиолетовый букет"/>
                <Item position="col-sm-3" mark="New" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-16.jpg"/>
                <Item position="col-sm-3" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-16.jpg"/>
                <Item position="col-sm-3" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-16.jpg"/>
                <Item position="col-sm-3" mark="New" imageLink="https://template58838.motopreview.com/mt-demo/58800/58838/mt-content/uploads/2016/06/mt-471_product-16.jpg"/>
            </div>
        </div>
    );
}

export default Content;