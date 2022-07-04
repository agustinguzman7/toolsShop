import { CartContext } from "./CartContext.js";
import { useContext } from "react";
import Button from 'react-bootstrap/Button'

const CartRender = ({ id, title, price, quantity, img }) => {

    const { removeItem, calcTotalPerItem } = useContext(CartContext);

    const removeId = () => {
        removeItem(id);
    }

    return (
        <>
            <div>
                <div className="CartRender">
                    <div>
                        <img className="ImgRenderCart" src={img} alt="producto"></img>
                    </div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <h4>Cantidad: {quantity}</h4>
                        <h4>Precio: ${price}</h4>
                        <h4>Subtotal: ${calcTotalPerItem(id)}</h4>
                        <Button type="button" variant="primary" onClick={removeId}>Borrar Item</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartRender;