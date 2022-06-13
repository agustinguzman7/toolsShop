import { CartContext } from "./CartContext.js";
import { useContext } from "react";

const CartRender = ({id,title,price,quantity,img}) => {
    
    const { removeItem, calcTotalPerItem } = useContext(CartContext);

    const removeId = () => {
        removeItem(id);
    }
    
    return(
    <>
        <div >
            <div>
                <div>
                    <img src={img} alt="producto"></img>
                </div>
                <div>{title}</div>
                <div>Cantidad: {quantity}</div>
                <div>Precio: ${price}</div>
                <div>Subtotal: ${calcTotalPerItem(id)}</div>
                <button type="button" onClick={removeId}>Borrar Item</button>
            </div>
        </div>
    </>
    )
}

export default CartRender;