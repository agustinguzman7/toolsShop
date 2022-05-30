import React from 'react';
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
const ItemDetail = ({product}) => {
    const {title,description,price,img}=product;
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
                    <ItemCount stock="5" initial={1} onAdd/>
                    
                </Card.Body>
                </div>
                
            </div>
        </>
    );
}
export default ItemDetail;