import React from 'react';
import { useState } from 'react';
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const ItemDetail = ({product}) => {
    const [itemCount, setItemCount] =useState(0);

    const onAdd = (Cantidad) => {
        swal('Añadiste ' + Cantidad + ' productos a tu carrito!');;
        setItemCount(Cantidad);
    }

    const {title,description,price,stock,img}=product;
    
    return (
        <>
            <div className="ItemDetail" style={{ width: '90%' }}>
                <div>
                  <img src={img} style={{width:'50%'} } ></img>
                </div>
                <div>
                    <Card.Body>
                    <h1>{title}</h1>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    {
                itemCount===0
                ?<ItemCount stock={stock} initial= {1} onAdd={onAdd}/>
                :<Link to='/Cart'><Button variant="primary">Ir al Carrito</Button></Link>
                }
                    
                    
                </Card.Body>
                </div>
                
            </div>
        </>
    );
}
export default ItemDetail;